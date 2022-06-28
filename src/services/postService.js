const { User, BlogPost, Category, PostCategory } = require('../database/models');

const createPost = async (email, { title, content, categoryIds }) => {
  // try {
  const user = await User.findOne({ where: { email } });
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });

  if (count === 0) return false;
  // const blogPostAndCategorie = await sequelize.transaction(async (t) => {
  const post = await BlogPost.create({ title, content, userId: user.id });

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

const updatePostById = async (id, email, { title, content }) => {
  const checkEmail = await User.findOne({ where: { email } });

  const checkUser = await BlogPost.findOne({ where: { userId: id } });

  if (checkEmail.id !== checkUser.userId) return false;

  await BlogPost.update({ title, content }, { where: { id } });

  const [updatePost] = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return updatePost;
};

module.exports = {
  createPost,
  getPostAll,
  getPostById,
  updatePostById,
};
