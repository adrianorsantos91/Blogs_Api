const express = require('express');
const userController = require('../controllers/userController');
const { validateName, validateEmail, validatePassword } = require('../middlewares/validatedUser');
const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', validateName, validateEmail,
validatePassword, userController.createUser);
router.get('/', authenticateToken, userController.getUserAll);
router.get('/:id', authenticateToken, userController.getUserById);
router.delete('/me', authenticateToken, userController.deleteUserById);

module.exports = router;
