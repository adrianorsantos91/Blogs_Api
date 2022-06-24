const loginService = require('../services/loginService');

const authentication = async (res, req) => {
  console.log('controller: %s', req.body);
  const token = await loginService.authentication(req.body);
  console.log('token: %s', token);
  return res.status(200).json(token);
};

module.exports = {
  authentication,
};
