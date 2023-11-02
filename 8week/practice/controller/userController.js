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

exports.userLogin = (req, res) => {
  console.log(req.body);
  const { userId, password } = req.body;

  userModel
    .findOne({
      where: { userId, password },
    })
    .then((result) => {
      if (result == null) {
        res.send("등록된 회원정보나 비밀번호가 틀렸습니다.");
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
