const categorieService = require('../services/categorieService');

const createCategory = async (req, res) => {
  const category = await categorieService.createCategory(req.body);
  return res.status(201).json(category);
};

module.exports = {
  createCategory,
};
