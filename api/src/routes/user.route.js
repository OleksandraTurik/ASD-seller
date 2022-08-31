const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const {
    authMiddleware,
    userFilterSortMiddleware,
    paginationMiddleware,
    idValidationMiddleware,
} = require('../middlewares');

const router = Router();

// registration routes
router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration,
);
//post user
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/avatar/:id', idValidationMiddleware, userController.uploadAvatar);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/', userFilterSortMiddleware, paginationMiddleware, userController.getUsers);
router.patch('/:id', idValidationMiddleware, authMiddleware, userController.modifyUser);
router.get('/:id', idValidationMiddleware, userController.getUser);
router.delete('/:id', idValidationMiddleware, userController.deleteUser );
/// verify message

module.exports = router;
