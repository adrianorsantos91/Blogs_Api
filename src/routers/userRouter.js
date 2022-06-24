const express = require('express');
const userController = require('../controllers/userController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');
const { validateName, validateEmail, validatePassword } = require('../middlewares/validatedUser');

const router = express.Router();

router.post('/', validateName, validateEmail,
validatePassword, userController.createUser);

module.exports = router;
