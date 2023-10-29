import {
  userModelAccount,
  userModelCheck,
  userModelDelete,
  userModelUpdate,
} from '../model/userModel.mjs';

export const userControllerAccount = async (req, res) => {
  const { id, pw, name } = req.body;
  try {
    const user = await userModelCheck(req, res);

    for (const row of user) {
      if (row.userId == id) {
        res.send('이미 등록된 유저가 있습니다.');
        return;
      }
    }

    userModelAccount(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류가 발생했습니다.');
  }
};

export const userControllerCheck = async (req, res) => {
  const { id, pw } = req.body;
  try {
    const result = await userModelCheck(req, res);
    console.log(result);
    if (result.length === 0) {
      res.send('등록된 회원 정보가 없습니다.');
      return;
    }
    if (result[0].userId == id && result[0].password == pw) {
      res.send({ user: result });
    } else if (result[0].userId == id) {
      res.send('비밀번호가 들렸습니다.');
      return;
    } else if (result[0].password == pw) {
      res.send('아이디가 틀렸습니다.');
      return;
    }
  } catch (error) {
    res.send(error);
  }
};

export const userControllerUpdate = (req, res) => {
  try {
    // await userModelCheck(req);
    userModelUpdate(req, res);
  } catch (error) {
    res.send(error);
  }
};

export const userControllerDelete = (req, res) => {
  try {
    userModelDelete(req, (result) => {
      console.log(result);
      res.send('삭제완료.');
    });
  } catch (error) {
    res.status(400).send('다시 시도해 주세요.');
  }
};
