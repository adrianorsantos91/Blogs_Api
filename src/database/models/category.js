const Categorie = (sequelize, DataTypes) => {
  const Categorie = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  // Categorie.associate = (models) => {
  //   Categorie.hasMany(models.PostCategorie,
  //     { foreignKey: 'categoryId', as: 'postCategories' });
  // };

  return Categorie;
};

module.exports = Categorie;
