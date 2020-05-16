const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', homeRouter);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})