const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

// Index
router.get('/', controller.index);

module.exports = router;
