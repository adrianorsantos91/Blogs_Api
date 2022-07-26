const { User } = require('../database/models');

const createUser = async ({ displayName, email, password, image }) => {
  const checkEmail = await User.findOne({
    where: { email },
  });

  if (checkEmail) {
    return false;
  }

  return User.create({
    displayName,
    email,
    password,
    image,
  });
};

const getUserAll = async () => {
  const userAll = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return userAll;
};

const getUserById = async (id) => {
  const userById = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });
  return userById;
};

const deleteUserById = async (email) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });

  await User.destroy({ where: { id: user.id } });
};

module.exports = {
  createUser,
  getUserAll,
  getUserById,
  deleteUserById,
};
