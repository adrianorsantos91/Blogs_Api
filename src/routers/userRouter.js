const express = require('express');
const userController = require('../controllers/userController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', userController.auth);

module.exports = router;
