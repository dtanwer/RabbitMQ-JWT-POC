const express = require("express");
const router = express.Router();
const { getAllClientData } = require("../controller/user.controller");
const { verifyToken } = require("../utils/verifyToken");

router.get("/", verifyToken, getAllClientData);

module.exports = router;
