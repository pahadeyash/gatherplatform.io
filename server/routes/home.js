const express = require('express');
const home = express.Router();
const path = require('path');
const homeController = require('../controller/homeController');
const usersController = require('../controller/usersController');

home.get('/', usersController.isLoggedIn, (req, res) => {
    res.send('Welcome mr ' + req.user)
});

module.exports = home;