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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userById = await userService.getUserById(id);
  if (!userById) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userById);
};

module.exports = {
  createUser,
  getUserAll,
  getUserById,
};
