const validateContainsFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json(
      { message: 'Some required fields are missing' },
    );
  }

  next();
};

const validateCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status().json({ message: '"categoryIds" not found' });
  }

  next();
};

const validateUpdateContainsFields = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json(
      { message: 'Some required fields are missing' },
    );
  }

  next();
};

module.exports = {
  validateContainsFields,
  validateCategoryIds,
  validateUpdateContainsFields,
};
