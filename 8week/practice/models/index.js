const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userModel = require("./userModel")(sequelize, Sequelize);
db.productModel = require("./productModel")(sequelize, Sequelize);
console.log(db.productModel);

module.exports = db;
