// Requirements
const express = require('express');
const app = express();
const notebookRoutes = require('./api/routes/notebookRoutes');
const path = require('path');

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

app.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Index page'
  });
});

app.use('/notebooks', notebookRoutes);

module.exports = app;