const { Category } = require('../database/models');

const createCategory = ({ name }) =>
    Category.create({
    name,
  });

const getCategoriesAll = async () => {
  const categoriesAll = await Category.findAll();
  return categoriesAll;
};

module.exports = {
  createCategory,
  getCategoriesAll,
};
