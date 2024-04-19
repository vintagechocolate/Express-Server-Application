const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Dummy categories data
let categories = [
  new Category(1, 'Category 1'),
  new Category(2, 'Category 2')
];

// Get all categories
router.get('/', (req, res) => {
  res.json(categories);
});

module.exports = router;
