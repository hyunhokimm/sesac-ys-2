const express = require("express");
const controller = require("../controllers/Cmain");
const router = express.Router();

router.get("/", controller.main);

router.get("/comments", controller.comments);

module.exports = router;
