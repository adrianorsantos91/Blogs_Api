const userService = require('../services/userService');
const loginService = require('../services/loginService');

const createUser = async (req, res) => {
  const create = await userService.createUser(req.body);

  if (!create) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = await loginService.authentication(req.body);

  return res.status(201).json(token);
};

const getUserAll = async (_req, res) => {
  const userAll = await userService.getUserAll();

  return res.status(200).json(userAll);
};

module.exports = {
  createUser,
  getUserAll,
};
