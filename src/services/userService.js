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

module.exports = {
  createUser,
};
