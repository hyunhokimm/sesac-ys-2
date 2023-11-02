const express = require("express");
const userRoute = require("./routes/userRoute.js");
const db = require("./models/index.js");
const app = express();
// app.use('/static', express.static(__dirname +'/'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

// app.get("*", (res, res) => {
//   res.send("접근할수 없는 주소입니다.");
// });

// db.sequelize.sync().then(() => console.log("db 연결"));
// console.log(db.sequelize);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
