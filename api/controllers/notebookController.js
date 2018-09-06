const Notebook = require('../models/notebookModel');

// Retrieve and return all notebooks from the database
exports.findAll = (req, res) => {
  // Retrieve and return all notebooks from database
  Notebook.find()
  .then(notes => {
    res.send(notes);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'An error occured while retrieving the notebooks'
    });
  });
};

// Create a and save new notebook
exports.create = (req, res) => {
  // Create a new notebook
  const notebook = new Notebook({
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    availability: req.body.availability
  });
  
  // Save newly created notebook in the database
  notebook.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'An error occured while creating the notebook'
    });
  });
};

// Find a single notebook with a notebookId
exports.findOne = (req, res) => {
  Notebook.findById(req.params.notebookId)
  .then(notebook => {
    if (!notebook) {
      return res.status(404).send({
        message: `Notebook with id ${req.params.notebookId} not found`
      });
    } else {
      res.send(notebook);
    }
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: `Notebook with id ${req.params.notebookId} not found`
      });
    } else {
      return res.status(500).send({
        message: `Error retrieving notebook with id ${req.params.notebookId}`
      });
    }
  });
};

// Update a notebook based on the notebookId
exports.update = (req, res) => {
  // Find notebook and update it
  Notebook.findByIdAndUpdate(req.params.notebookId ,{
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    availability: req.body.availability
  }, { new: true })
  .then(notebook => {
    if (!notebook) {
      return res.status(404).send({
        message: `Notebook with id ${req.params.notebookId} not found`
      });
    } else {
      res.send(notebook);
    }
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: `Notebook with id ${req.params.notebookId} not found`
      });
    } else {
      return res.status(500).send({
        message: `Error updating notebook with id ${req.params.notebookId}`
      });
    }
  });
};

// Delte a notebook based on the notebookId
exports.delete = (req, res) => {
  // Find a notebook and delete it
  Notebook.findByIdAndDelete(req.params.notebookId)
  .then(notebook => {
    if (!notebook) {
      return res.status(404).send({
        message: `Notebook with id ${req.params.notebookId} not found`
      });
    } else {
      return res.send({
        message: `Notebook successfully deleted!`
      });
    }
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: `Notebook with id ${req.params.notebookId} not found`
      });
    } else {
      return res.status(500).send({
        message: `Could not delete notebook with id ${req.params.notebookId}`
      });
    }
  });
};