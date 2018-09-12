// Node modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');


// Require routes
const indexRoute = require("./api/routes/indexRoute");
const notebookRoutes = require('./api/routes/notebookRoutes');
const userRoutes = require('./api/routes/userRoutes');

const app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Connect to database
mongoose.connect(dbConfig.url, { 
  useNewUrlParser: true 
}).then(() => {
  console.log('Successfully connected to the database');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// Use express-session
app.use(session({ secret: 'mySuperSecretSecret', resave: false, saveUninitialized: false }));
// Use connect-flash
app.use(flash());
// Use passport
app.use(passport.initialize());
app.use(passport.session());

// Use client files
app.use(express.static(path.join(__dirname, '/client')));
// Use custom JavaScript
app.use('/client/js', express.static(path.join(__dirname, '/client/js')));
// Use Semantic UI CSS
app.use('/client/css', express.static(path.join(__dirname, '/client/libs/semantic/dist/')));
//Use Semantic UI JS
app.use('/client/js', express.static(path.join(__dirname, '/client/libs/semantic/dist/')));
// Use jQuery
app.use('/client/js/libs', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

//Set views
app.set('views', './client/views');
// Set view engine
app.set('view engine', 'ejs');

// Routes middleware
app.use('/', indexRoute);
app.use('/notebooks', notebookRoutes);
app.use('/signup', userRoutes);

module.exports = app;