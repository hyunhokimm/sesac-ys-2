const { userModel, db, userAll, userArr } = require("../../models/userModel");

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

exports.createUser = (req, res) => {
  db.push(req.body);
  console.log(db);
};

exports.check = (req, res) => {
  const { id, password, name } = req.body;
  let result = false;

  // for (i = 0; i < userAll.length; i++) {
  //   if (
  //     id === userAll[i].id &&
  //     password === userAll[i].pw &&
  //     name === userAll[i].name
  //   ) {
  //     result = true;
  //   }
  // }

  const users = userArr.split(" ");
  let user;
  console.log(users);
  for (i = 0; i < users.length; i++) {
    let user = users[i].split("//");
    for (i = 0; i < user.length; i++) {}
  }

  res.send(result);
};
