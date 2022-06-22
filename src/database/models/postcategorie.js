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
  }, {
    timestamps: false,
  });

  PostCategorie.associate = (models) => {
    PostCategorie.belongsTo(models.BlogPost,
      { foreignKey: 'postId', as: 'blogPosts' });
  };

  return PostCategorie;
};

module.exports = PostCategorie;

