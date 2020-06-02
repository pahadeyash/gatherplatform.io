const express = require("express");
const loginRouter = express.Router();
const loginController = require("../controller/loginController");

loginRouter.post("/", loginController.logInUser, (req, res) => {
    res.status(200).send('received!');
})

module.exports = loginRouter;