const express = require('express');
const usersController = {};

usersController.isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        //create more meaningful message for failed login via oauth
        res.sendStatus(401);
    }
}

module.exports = usersController;