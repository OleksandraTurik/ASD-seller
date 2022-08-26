const bcrypt = require('bcrypt');
const uuid = require('uuid');
const UserModel = require('../models/User.modal');
const mailService = require('./Mail.service');
const tokenService = require('./Token.service');
const UserDto = require('../dtos/User.dtos');
const ApiError = require('../exceptions/Api.error');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`Користувач з такою почтовою адресою ${email} вже існує`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({ email, password: hashPassword, activationLink });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

    return {
      ...tokens,
      user: UserDto,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest('Некоректна силка активації');
    }
    user.isActivated = true;
    await user.save();
  }
}

module.exports = new UserService();
