const bcrypt = require('bcrypt');
const uuid = require('uuid');
const UserModel = require('../models/User.model');
const mailService = require('./Mail.service');
const tokenService = require('./Token.service');
const UserDto = require('../dtos/User.dtos');
const StatusError = require('../exceptions/StatusError')

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new StatusError(400, `User with email:${email} already exists`)
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
      throw new StatusError(400, 'Invalid activation link')
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new StatusError(404, 'User with this email not found')
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      throw new StatusError(400, 'Invalid password')
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw new StatusError(401, 'User is unauthorized')
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, userDto };
  }

  async modifyUser(id, updates) {
    const user = await UserModel.updateOne({ _id: id }, updates);
    if (!user) {
      throw new StatusError(404, 'User not found')
    }
    return user;
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  async uploadAvatarUser(id, file) {
    const user = await UserModel.findById(id);
    const avatarName = `${uuid.v4()}.jpg`;
    file.mv('/static');
    user.avatar = avatarName;
    await user.save();
  }
}

module.exports = new UserService();
