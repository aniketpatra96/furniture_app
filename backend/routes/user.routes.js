const express = require("express");
const UserRouter = express.Router();
const { RegisterUser, LoginUser } = require("../controllers/user.controller");
UserRouter.post("/register", RegisterUser);
UserRouter.post("/login", LoginUser);

module.exports = UserRouter;
