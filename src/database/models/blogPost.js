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
    published: {
      type: DataTypes.STRING
    },
    updated: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  // BlogPost.associate = (models) => {
  //   BlogPost.hasMany(models.PostCategorie,
  //     { foreignKey: 'postId', as: 'postCategories' });
  // };

  // Comentado pois o teste esperando uma única associação
  //Expected: {"expectAssociationWith": "User"}, ObjectContaining {}

  return BlogPost;
};

module.exports = BlogPost;
