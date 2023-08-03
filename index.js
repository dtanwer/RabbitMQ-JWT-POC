const express = require("express");
require("dotenv").config();
const {mongooesConnect} = require("./db");
const userRouter = require("./router/user.router");
const authRouter = require("./router/auth.router");
const msgRouter = require("./router/message.router");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("Api is working");
});
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/msg", msgRouter);


app.listen(5000, () => {
  mongooesConnect();
  console.log("Server is running  !!!!");
});
