const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const authentication = async ({ email }) => {
  const usuario = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });

  if (!usuario) {
    return false;
  }

  const token = generateJWTToken(usuario.email);
  return { token };
};

module.exports = {
  authentication,
};
