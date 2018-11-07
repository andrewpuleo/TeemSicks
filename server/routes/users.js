const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.route('/')
   // create user
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
    console.log("user", req.body);
    // validate potentially here
    User.create({
      userId,
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
    }).then((user) => {
      res.json(user);
    });
  });

module.exports = router;
