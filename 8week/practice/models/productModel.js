function productModel(Sequelize, DataTypes) {
  return Sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      productName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      productCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productComment: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "product",
      ...Sequelize,
    }
  );
}

module.exports = productModel;
