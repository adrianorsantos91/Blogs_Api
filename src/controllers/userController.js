const userService = require('../services/userService');
const loginService = require('../services/loginService');
// const authenticateToken = require('../middlewares/auth.middleware');

const createUser = async (req, res) => {
  const create = await userService.createUser(req.body);

  if (!create) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = await loginService.authentication(req.body);

  return res.status(201).json(token);
};

module.exports = {
  createUser,
};
