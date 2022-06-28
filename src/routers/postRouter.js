const express = require('express');
const postController = require('../controllers/postController');
const authenticateToken = require('../middlewares/auth.middleware');
const { validateContainsFields, validateCategoryIds,
  validateUpdateContainsFields } = require('../middlewares/validatePost');

const router = express.Router();

router.get('/search', authenticateToken, postController.searchPostByQuery);
router.post('/', authenticateToken,
validateContainsFields, validateCategoryIds, postController.createPost);
router.get('/', authenticateToken, postController.getPostAll);
router.get('/:id', authenticateToken, postController.getPostById);
router.put('/:id', authenticateToken, validateUpdateContainsFields, postController.updatePostById);
router.delete('/:id', authenticateToken, postController.deletePostById);

module.exports = router;
