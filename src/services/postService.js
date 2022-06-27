const { User, BlogPost, Category, PostCategory } = require('../database/models');

const createPost = async (email, { title, content, categoryIds }) => {
  // try {
  const userId = await User.findOne({ where: { email } });
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });

  if (count === 0) return false;
  // const blogPostAndCategorie = await sequelize.transaction(async (t) => {
  const post = await BlogPost.create({ title, content, userId: userId.id });

  categoryIds.forEach(async (category) => {
    await PostCategory.create({ postId: post.id, categoryId: category });
  });

  return post;
};

const getPostAll = async () => {
    const posts = await BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });

    return posts;
};

const getPostById = async (id) => {
  const posts = await BlogPost.findAll({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  if (!posts) return false;

  return posts;
};

module.exports = {
  createPost,
  getPostAll,
  getPostById,
};
