const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

// Index
router.get('/', controller.index);

// Show
router.get('/:id', controller.show);

module.exports = router;
