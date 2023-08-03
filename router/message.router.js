const express = require("express");
const router = express.Router();
const { sendMessage, getMessage } = require("../controller/message.controller");
const { verifyToken } = require("../utils/verifyToken");

router.post("/", verifyToken, sendMessage);
router.get("/", verifyToken, getMessage);
module.exports = router;
