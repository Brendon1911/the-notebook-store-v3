const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the index route!'
  });
});

module.exports = app;