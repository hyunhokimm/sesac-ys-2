import { userModelAccount } from "../model/userModel.mjs";

export const userControllerAccount = (req, res) => {
  const user = req.body;
  let userInfo;
  userModelAccount(req, (result) => {
    userInfo = {
      user: user.id,
      id: result.insertId,
    };
    res.send({ data: userInfo });
  });
};
