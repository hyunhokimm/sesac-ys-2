const { productModel } = require("../models/index");

exports.productCreate = (req, res) => {
  console.log(req.body);
  const { productName, productCount, productPrice, productComment } = req.body;
  productModel
    .create({
      productName,
      productCount,
      productPrice,
      productComment,
    })
    .then((result) => {
      res.send(result.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("지나감");
};
