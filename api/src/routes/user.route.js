const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const {
    authMiddleware,
    userFilterSortMiddleware,
    paginationMiddleware,
    idValidationMiddleware,
    singleUploadMiddleware,
} = require('../middlewares');

const router = express.Router();

// registration routes
router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration,
);
//post user
router.post('/login', express.json(), userController.login);
router.post('/logout', express.json(), userController.logout);
router.patch('/:id/avatar', idValidationMiddleware, singleUploadMiddleware('avatar'), userController.uploadAvatar);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/', userFilterSortMiddleware, paginationMiddleware, userController.getUsers);
router.patch('/:id', express.json(), idValidationMiddleware, authMiddleware, userController.modifyUser);
router.get('/:id', idValidationMiddleware, userController.getUser);
router.delete('/:id', idValidationMiddleware, userController.deleteUser );
/// verify message

module.exports = router;
