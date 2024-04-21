const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Dummy tasks data
let tasks = [
  new Task(1, 'Task 1', 'Description for Task 1', 'Category 1', 'pending'),
  new Task(2, 'Task 2', 'Description for Task 2', 'Category 2', 'completed'),
  new Task(3, 'Task 3', 'Description for Task 3', 'Category 3', 'pending')
];

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});
 
// Create a new task
router.post('/', (req, res) => {
  const { title, description, category, status } = req.body;
  const newTask = new Task(tasks.length + 1, title, description, category, status);
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Read a single task by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(task => task.id === parseInt(id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Update a task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, category, status } = req.body;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex !== -1) {
    tasks[taskIndex].title = title;
    tasks[taskIndex].description = description;
    tasks[taskIndex].category = category;
    tasks[taskIndex].status = status;
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Delete a task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.json({ message: 'Task deleted', task: deletedTask });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

module.exports = router;
