const express = require('express');
const app = express();
const notebookRoutes = require('./api/routes/notebookRoutes');

app.get('/', (req, res) => {
  res.json({
    message: 'This is the index route!'
  });
});

app.use('/notebooks', notebookRoutes);

module.exports = app;