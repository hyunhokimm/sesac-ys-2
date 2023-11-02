const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.customer = require("./customer")(sequelize, Sequelize);
db.orders = require("./orders")(sequelize, Sequelize);

// db.customer.hasMany(db.orders, {
//   foreignKey: "custid",
//   // sourceKey:"cusid"
// });
// db.orders.belongsTo(db.customer, {
//   foreignKey: "custid",
//   // targetKey: "id",
// });

module.exports = db;
