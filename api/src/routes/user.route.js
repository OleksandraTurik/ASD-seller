const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const { authMiddleware, userFilterSortMiddleware, paginationMiddleware } = require('../middlewares');

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
router.get('/', userFilterSortMiddleware, paginationMiddleware, userController.getUser);
router.patch('/:id', authMiddleware, userController.modifyUser);
/// verify message

module.exports = router;
