const express = require('express');

const router = express.Router();
const { Todo } = require('../../database');

router.get('/api/todos', (req, res, next) => {
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/api/todos', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/api/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
