const express = require('express');
const port = 8000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/ajax', (req, res) => {
  const user = req.query;
  res.send(user);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/axios', (req, res) => {
  res.send(req.query);
});

app.post('/axios', (req, res, next) => {
  //   res.status(500);
  res.send(req.body);
  //   next();
});

app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  res.send(req.body);
});

app.get('/user', (req, res) => {
  console.log('user');
  res.render('user');
});

app.get('/userGet', (req, res) => {
  console.log(req.query);
});

app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.post('/userInfo', (req, res) => {
  const userId = '1111';
  const userPw = '1111';
  const { id, pw } = req.body;
  if (userId == id && userPw == pw) {
    res.status(200).send(`${id}님 환영합니다.`);
  } else if (userId == id) {
    res.status(400).send('비밀번호가 틀렸습니다.');
  } else if (userPw == pw) {
    res.status(400).send('회원 id가 다릅니다.');
  } else {
    res.send('비밀번호와 id모두 틀렸습니다.');
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
