const { User, BlogPost, Category } = require('../database/models');

const createPost = async (email, { title, content, categoryIds }) => {
  const userId = await User.findOne({
    where: { email },
  });
  console.log('userId:', userId);
  const checkCategory = await Category.findAll({
    where: { id: categoryIds },
  });

  console.log('teste:', checkCategory);
  if (!checkCategory || checkCategory.length === 0) return false;

  const post = await BlogPost.create({
    title,
    content,
    userId: userId.id,
  });

  return post;
};

module.exports = {
  createPost,
};
