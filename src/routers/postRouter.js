const express = require('express');
const postController = require('../controllers/postController');
const authenticateToken = require('../middlewares/auth.middleware');
const { validateContainsFields, validateCategoryIds } = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', authenticateToken,
validateContainsFields, validateCategoryIds, postController.createPost);

module.exports = router;
