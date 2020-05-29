const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("User");
const keys = require("../config/keys");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: "538799953282-o4klufdr9jqs414v9oo8rjpr3qgj4km8.apps.googleusercontent.com",
  clientSecret: "1Smtx3yhhn8TZeRenKZl4z2i",
  callbackURL: "http://localhost:3000/api/users/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    return done(null, profile);
  }
));
