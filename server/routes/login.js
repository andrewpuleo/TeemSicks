var express = require('express');
var router = express.Router();
const { User } = require('../models');
const Auth = require('./authenticator');

/* GET users listing. */
router.get('/', function(req, res) {
  User.findAll().then((users) => {
    res.json({users});
  });
});

module.exports = router;