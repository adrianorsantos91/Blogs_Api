const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const authentication = async ({ email, password }) => {
  console.log('dados:', email, password);
  if (!email || !password) {
    const errorNotFound = { status: 400, message: 'Some required fields are missing' };
    throw errorNotFound;
  }

  const usuario = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });
  console.log(usuario);

  if (!usuario) {
    const userNotFound = { status: 400, message: 'Invalid fields' };
    throw userNotFound;
  }

  const token = generateJWTToken(usuario.email);
  return { token };
};

module.exports = {
  authentication,
};
