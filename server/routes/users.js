const express = require('express');
const { user } = require('../models');

const router = express.Router();

router.route('/')
  // get all todos
  .get((req, res) => {
    user.findAll().then((users) => {
      res.json({
        users,
      });
    });
  })

  // create  todo
  .post((req, res) => {
    const {
      userId,
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
    } = req.body;
    // validate potentially here
    ToDo.create({
      userId,
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
    }).then((todo) => {
      res.json(todo);
    });
  });

module.exports = router;
