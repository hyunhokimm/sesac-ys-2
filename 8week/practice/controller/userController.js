const { userModel } = require("../models/index");

exports.userCreate = (req, res) => {
  console.log(req.body);
  const { userId, password, userName } = req.body;
  userModel
    .create({
      userId,
      password,
      userName,
    })
    .then((result) => {
      res.send(result.dataValues);
    });
};
