const { User, BlogPost, Category, PostCategory } = require('../database/models');

const createPost = async (email, { title, content, categoryIds }) => {
  const userId = await User.findOne({ where: { email } });

  const { count } = await Category.findAndCountAll({
    where: { id: categoryIds },
  });

  if (count === 0) return false;

  const post = await BlogPost.create({
    title,
    content,
    userId: userId.id,
  });

  categoryIds.forEach(async (category) => {
    await PostCategory.create({
      postId: post.id,
      categoryId: category,
    });
  });

  return post;
};

module.exports = {
  createPost,
};
