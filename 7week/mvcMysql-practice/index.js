import express from "express";
import user from "./routes/userRoute.mjs";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", user);

app.get("*", (req, res) => {
  res.send("주소가 잘못되었습니다.");
});

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
