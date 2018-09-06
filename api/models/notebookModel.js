const mongoose = require('mongoose');

const notebookSchema = mongoose.Schema({
  make: String,
  model: String,
  price: Number,
  availability: Number
});

module.exports = mongoose.model('Notebook', notebookSchema);