const express = require('express');
const home = express.Router();
const path = require('path');
const homeController = require('../controller/homeController');

home.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/test.html'))
});

home.post('/', homeController.testFunction, (req, res) => {
    console.log('this is req.body: ', req.body);
    res.send({ number: res.locals.number });
})

module.exports = home;