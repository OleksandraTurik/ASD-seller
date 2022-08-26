const { Router } = require('express');
const userController = require('../controllers/User.controller');

const router = Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUser);

module.exports = router;
