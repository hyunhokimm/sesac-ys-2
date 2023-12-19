const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("socket 에 들어 왔습니다.", socket.id);

  socket.on("hello", (res) => {
    console.log(res);
  });
});

app.get("/", function (req, res) {
  res.render("client1");
});

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
