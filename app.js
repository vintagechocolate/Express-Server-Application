const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const loggingMiddleware = require('./middleware/loggingMiddleware');
const authenticationMiddleware = require('./middleware/authenticationMiddleware');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware')

// Routes
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const categoriesRouter = require('./routes/categories');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom Middleware
app.use(loggingMiddleware);
app.use(authenticationMiddleware);
app.use(errorHandlingMiddleware);

// Routes
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/categories', categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("Welcome to Farouk's Express Server Application!");
});

// Add this route handler at the end of your code
// app.get('/', (req, res) => {
//   res.redirect('/users');
// });

