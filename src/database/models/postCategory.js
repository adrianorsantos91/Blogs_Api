const PostCategorie = (sequelize, DataTypes) => {
  const PostCategorie = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  });

  PostCategorie.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blogPosts',
        through: PostCategorie,
        foreignKey: 'categoryId',
        otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: PostCategorie,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
  };

  return PostCategorie;
};

module.exports = PostCategorie;

