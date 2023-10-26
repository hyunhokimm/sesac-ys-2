const express = require("express");
const router = express.Router();
const userControll = require("../controllers/userController/index");

router.post("/", userControll.userGet);

router.post("/create", userControll.createUser);

router.post("/check", userControll.check);

module.exports = router;
