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

// Get user by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).json({message: 'User not found'});
  }
  res.json(user);
});

module.exports = router;
