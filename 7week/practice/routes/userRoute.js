const express = require("express");
const router = express.Router();
const userControll = require("../controllers/userController/index");

router.post("/", userControll.userGet);

module.exports = router;
