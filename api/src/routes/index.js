const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/User.controller');
const authMiddleware = require('../middlewares/Auth.middleware');

const router = Router();

// registration routes
router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/avatar/:id', userController.uploadAvatar);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUser);
router.patch('/user/:id', authMiddleware, userController.modifyUser);

/// verify message

module.exports = router;
