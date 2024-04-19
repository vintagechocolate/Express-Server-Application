const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Dummy tasks data
let tasks = [
  new Task(1, 'Task 1', 'Description for Task 1', 'Category 1', 'pending'),
  new Task(2, 'Task 2', 'Description for Task 2', 'Category 2', 'completed')
];

// Get all tasks
router.get('/', (req, res) => {
  res.render('tasks', { tasks });
});

// Create a new task
router.post('/', (req, res) => {
  const { title, description, category, status } = req.body;
  const newTask = new Task(tasks.length + 1, title, description, category, status);
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
