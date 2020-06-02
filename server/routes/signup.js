const express = require("express");
const signupRouter = express.Router();
const signupController = require("../controller/signupController");

signupRouter.post("/", signupController.registerUser, (req, res) => {
    res.status(200).send('received!');
})

module.exports = signupRouter;