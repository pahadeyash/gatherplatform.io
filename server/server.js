const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const passport = require('passport');
const cookieSession = require('cookie-session');

//load file dependencies
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");
const oauthRouter = require("./routes/oauth");
const landingRouter = require("./routes/landing");
require("./config/passport")(passport);
// const passport = require("./config/passport");

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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/users/login", loginRouter);

app.use("/api/users/register", signupRouter);

app.use("/api/users/", oauthRouter);

app.use('/home', homeRouter);

app.use('/', landingRouter);

//error handler below

//to allow for page to render due to client-side rendering with react router
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, "../../public/index.html"), function (err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })


//error handler for improper route
//change once near deployment
app.get("*", (req, res) => {
    res.redirect('/');
    // res.sendStatus(404);
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