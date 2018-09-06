const express = require('express');
const notebook = require('../controllers/notebookController.js');
const router = express.Router();

// Retreive all notebooks
router.get('/', notebook.findAll);

// Create a new notebook
router.post('/', notebook.create);

// Retrieve a single notebook
router.get('/:notebookId', notebook.findOne);

// Update a notebook
router.put('/:notebookId', notebook.update);

// Delete a notebook
router.delete('/:notebookId', notebook.delete);

module.exports = router;