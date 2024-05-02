const userRoute = require('express').Router();
const userController = require("../controller/user.controller");
const userVerifyMiddleware = require('../midelware/userVerify.middleware');

userRoute.post("/", userController.createUser)
userRoute.get("/", userController.getUser);
userRoute.post("/login", userController.findUser);
userRoute.get("/getMe", userVerifyMiddleware, userController.getMe);
module.exports = userRoute