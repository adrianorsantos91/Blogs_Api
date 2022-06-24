const express = require('express');
const categorieController = require('../controllers/categorieController');
const { validateName } = require('../middlewares/validatedCategories');
const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authenticateToken, validateName, categorieController.createCategory);
router.get('/', authenticateToken, categorieController.getCategoriesAll);

module.exports = router;
