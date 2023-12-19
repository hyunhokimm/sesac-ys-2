const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("socket 에 들어 왔습니다.", socket.id);

  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("hello2", { res });
  });

  socket.on("study", (res) => {
    console.log(res);
    socket.emit("study2", { res });
  });

  socket.on("bye", (res) => {
    console.log(res);
    socket.emit("bye2", { res });
  });
});
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
