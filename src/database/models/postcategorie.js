const PostCategorie = (sequelize, DataTypes) => {
  const PostCategorie = sequelize.define("PostCategorie", {
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
    PostCategorie.belongsTo(models.BlogPost,
      { foreignKey: 'postId', as: 'blogPosts' });
  };

  PostCategorie.associate = (models) => {
    PostCategorie.belongsTo(models.Categorie,
      { foreignKey: 'categoryId', as: 'categories' });
  };

  return PostCategorie;
};

module.exports = PostCategorie;

