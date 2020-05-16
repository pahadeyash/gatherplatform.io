const express = require('express');
const homeController = {};

homeController.testFunction = (req, res, next) => {
    const { test_word, test_number } = req.body;
    let newNumber = Number(test_number) + 1;
    res.locals.number = newNumber;
    next();
};

module.exports = homeController;