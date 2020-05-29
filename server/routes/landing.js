const express = require('express');
const landingRouter = express.Router();

landingRouter.get('/', (req, res) => res.send('You are not logged in!'));

landingRouter.get('/failed', (req, res) => res.send('You have failed to login!'));

module.exports = landingRouter;