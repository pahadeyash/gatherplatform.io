const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const passport = require("passport");

//load file dependencies
const users = require("./routes/users");

//mongodb configs
//key-value passed through mongoose.connect are configs to fix deprecated issues
const mongoose = require("mongoose");
const mongoURI =
    "mongodb+srv://support@gatherplatform.com:Stillwerise2020@cluster0-cyx5s.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.set("useCreateIndex", true);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

app.use('/home', homeRouter);

//error handler below
//error handler for improper route
app.get("*", (req, res) => {
    res.sendStatus(404);
});

//global error handler 
app.get((err, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An Error Occured!" }
    };
    return res.status(defaultErr.status).json(defaultErr.message);
});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})