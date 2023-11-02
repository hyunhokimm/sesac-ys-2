const express = require("express");
const { productCreate } = require("../controller/productController");
const productRoute = express.Router();

productRoute.post("/create", (req, res) => {
  productCreate(req, res);
});

module.exports = productRoute;
