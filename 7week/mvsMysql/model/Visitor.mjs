import mysql from "mysql";

const connect = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "rlagusgh1!",
  database: "test",
});

export const getModel = (cb) => {
  connect.query("select * from visitor", (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

export const postModel = (req, cb) => {
  const { username, comment } = req;
  connect.query(
    `insert into visitor (username, conment) values ('${username}', '${comment}')`,
    (err, result) => {
      if (err) {
        throw err;
      }
      cb(result.insertId);
    }
  );
};

export const delModelVisitor = (req, cb) => {
  const id = req.param;
  console.log(id);

  connect.query(`delete from visitor where id = '${id}'`, (err, result) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
