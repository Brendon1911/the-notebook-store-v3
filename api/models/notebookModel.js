const mongoose = require('mongoose');

const notebookSchema = mongoose.Schema({
  image: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  screenSize: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Number, required: true }
});

module.exports = mongoose.model('Notebook', notebookSchema);