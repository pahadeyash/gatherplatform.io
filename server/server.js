const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const passport = require('passport');
const cookieSession = require('cookie-session');

//load file dependencies
const users = require("./routes/users");

//mongodb configs
//key-value passed through mongoose.connect are configs to fix deprecated issues
const mongoose = require("mongoose");
const mongoURI =
    "mongodb+srv://gatherplatform:Stillwerise2020@cluster0-cyx5s.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.set("useCreateIndex", true);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//change once create google app under gather org
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
}));

// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// }

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

app.use('/home', homeRouter);

// google oauth routes

app.get('/', (req, res) => res.send('You are not logged in!'));

app.get('/failed', (req, res) => res.send('You have failed to login!'));


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