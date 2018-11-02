const express = require('express');
const { Product } = require('../models');
const router = express.Router();

router.route('/')
  // get all products
  .get((req, res) => {
    console.log("here");
    Product.findAll().then((products) => {
      res.json({
        products,
      });
    });
  })
  module.exports = router;

  /*
  // create  todo
  .post((req, res) => {
    const {
      subject,
      dueDate,
      done,
    } = req.body;
    // validate potentially here
    ToDo.create({
      subject,
      done,
      dueDate,
    }).then((todo) => {
      res.json(todo);
    });
  });

router.route('/:id')

  // get a specific todo
  .get((req, res) => {
    ToDo.findById(req.params.id).then((todo) => {
      res.json(todo);
    });
  })

  // update a given todo
  .put((req, res) => {
    const { subject, dueDate, done } = req.body;
    ToDo.findById(req.params.id).then((todo) => {
      const todoToUpdate = todo;
      todoToUpdate.subject = subject;
      todoToUpdate.dueDate = dueDate;
      todoToUpdate.done = done;
      todoToUpdate.save().then((updatedTodo) => {
        res.json(updatedTodo);
      });
    });
  })

  .delete((req, res) => {
    const idToDelete = req.params.id;
    ToDo.findById(idToDelete).then((todo) => {
      todo.destroy().then(() => {
        res.json({ delete: true });
      });
    }).catch(() => {
      res.json({ delete: false });
    });
  });

module.exports = router;
*/