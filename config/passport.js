const passport = require('passport');
const User = require('../models/userModel');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToFallback: true
}, (req, username, password, done) => {
 User.findOne({ 'username': username }, (err, user) => {
   if (err) {
     return done(err);
   } else if (user) {
     return done(null, false, { message: 'Username is already in use.'});
   } else {
     const newUser = new User();
     newUser.username = username;
     newUser.password = newUser.encryptPassword(password);
     newUser.save((err, result) => {
       if (err) {
         return done(err);
       } else {
         return done(null, newUser);
       }
     });
   }
 });
}));