const auth = async (req, res) => {
  console.log('teste', req.body);
  return res.status(400).send('teste');
};

module.exports = {
  auth,
};
