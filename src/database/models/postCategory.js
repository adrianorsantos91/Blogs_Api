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
        through: PostCategorie,
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'blogPosts',
    });

    models.BlogPost.belongsToMany(models.Category,
      {
        through: PostCategorie,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
      });
  };

  return PostCategorie;
};

module.exports = PostCategorie;

