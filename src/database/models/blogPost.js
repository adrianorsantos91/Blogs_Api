const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    timestamps: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostCategorie,
      { foreignKey: 'postId', as: 'postCategories' });
  };

  return BlogPost;
};

module.exports = BlogPost;
