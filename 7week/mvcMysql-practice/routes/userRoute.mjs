import express from "express";
import { userControllerAccount } from "../controller/userController.mjs";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("account");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/account", async (req, res) => {
  userControllerAccount(req, res);
});

export default router;
