function customer(sequelize, DataTypes) {
  return sequelize.define(
    "customer",
    {
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      custname: { type: DataTypes.STRING(10), allowNull: false },
      addr: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(11),
      },
      birth: {
        type: DataTypes.DATE,
      },
    },
    { tableName: "customer", timestamps: false, freezeTableName: true }
  );
}

module.exports = customer;
