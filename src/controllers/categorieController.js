const categorieService = require('../services/categorieService');

const createCategory = async (req, res) => {
  const category = await categorieService.createCategory(req.body);
  return res.status(201).json(category);
};

const getCategoriesAll = async (_req, res) => {
  const categoriesAll = await categorieService.getCategoriesAll();
  return res.status(200).json(categoriesAll);
};

module.exports = {
  createCategory,
  getCategoriesAll,
};
