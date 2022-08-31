const { validationResult } = require('express-validator');
const userService = require('../service/User.service');
const StatusError = require('../exceptions/StatusError');
const errorHandler = require('../helpers/errorHandler');
const UserModel = require('../models/User.model');
const uuid = require('uuid');
const { Advert } = require('../models');

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new StatusError (400, 'Invalid authorisation data');
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async logout(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async activate(req, res) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  getUsers(req, res) {
    try {
      const users = req.paginatedResults;
      return res.json(users);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async modifyUser(req, res) {
    try {
      const { id } = req.params;
      const { email, password, fullName, address, phoneNumber } = req.body;
      const user = await userService.modifyUser(id, { email, password, fullName, address, phoneNumber });
      return res.json(user);
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async uploadAvatar(req, res) {
    try{
      if (!req.files) {
        return res.status(400).send("No files were uploaded.");
      }
      const { file } = req.files;
      const fileName = `${uuid.v4()}.jpg`;
      await file.mv('src/static/' + fileName, (err) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send({ status: "success" });
      });

      const user = await UserModel.updateOne({ _id:req.params.id }, { avatar:fileName });
      await user.save();
    } catch (e) {
      errorHandler(res, e);
    }
  }

  async getUser(req, res){
    try {
      const user = await UserModel.findById(req.params.id);
      if(!user){
        throw new StatusError (404, 'user not found');
      }
      res.status(200).json(user);
    }catch (e) {
      errorHandler(res, e);
    }
  }

  async deleteUser(req, res){
    try {
      const { id } = req.params;
      const user = await UserModel.deleteOne({ _id:id });
      await Advert.deleteMany({ sellerId:id });
      return res.json(user);
    }catch (e) {
      errorHandler(res, e);
    }
  }
}

module.exports = new UserController();
