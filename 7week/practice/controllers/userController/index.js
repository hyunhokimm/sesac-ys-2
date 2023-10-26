const { userModel } = require("../../models/userModel");

exports.userGet = (req, res) => {
  const { id, password } = req.body;

  console.log(userModel);
  if (id !== userModel.id) {
    console.log("아이디 다름");
    res.status(400).send("아이디가 다릅니다.");
  } else if (password !== userModel.password) {
    console.log("패스워드 다름");
    res.status(400).send("패스워드가 다릅니다.");
  } else {
    res.send(`${id}님 환영합니다. 로그인 되었습니다.`);
  }
};
