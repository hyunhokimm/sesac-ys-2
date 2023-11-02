const { customer, orders } = require("../models/index");

exports.main = async (req, res) => {
  console.log("도착");
  customer
    .findAll({})
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
