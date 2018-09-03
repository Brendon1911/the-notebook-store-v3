const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'Show all notebooks'
  }); 
});

router.post('/', (req, res, next) => {
  res.json({
    message: 'Add a notebook to all notebooks'
  }); 
});

router.get('/:notebookId', (req, res, next) => {
  res.json({
    message: 'Show a single notebook'
  }); 
});

router.patch('/:notebookId', (req, res, next) => {
  res.json({
    message: 'Update a single notebook'
  }); 
});

router.delete('/:notebookId', (req, res, next) => {
  res.json({
    message: 'Delete a single notebook'
  }); 
});

module.exports = router;