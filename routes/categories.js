const express = require('express');
const router = express.Router();
let categories = [
  {id: 1, name: 'Category 1'},
  {id: 2, name: 'Category 2'}
];

// Get all categories or a single category by id
router.get('/:id?', (req, res) => {
  if(req.params.id) {
    const id = parseInt(req.params.id, 10);
    const category = categories.find(category => category.id === id);

    if (!category) {
      return res.status(404).json({message: 'Category not found'});
     }

    return res.json(category);
  } else {
    return res.json(categories);
  }
});

module.exports = router;
