const { Router } = require('express');
const categoryController = require('../controllers/Category.controller');

const router = Router();

router.post('/', categoryController.create);
router.get('/', categoryController.getCategory);
module.exports = router;
