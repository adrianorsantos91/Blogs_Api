module.exports = (err, req, res, _next) => {
  console.log('ErrorHandler: %s', err.message);
  res.status(err.status || 500).json({ message: err.message || 'Erro inesperado.' });
};
