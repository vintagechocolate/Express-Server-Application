// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// Dummy users data
let users = [
  new User(1, 'john_doe', 'john@example.com'),
  new User(2, 'jane_smith', 'jane@example.com')
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
