const validateFormatEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}; // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

const validateName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!validateFormatEmail(email)) {
    return res.status(400).json(
      { message: '"email" must be a valid email' },
    );
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
