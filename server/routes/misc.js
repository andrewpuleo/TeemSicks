var express = require('express');
var router = express.Router();
const { Misc } = require('../models');

/* GET all misc data */
router.get('/', function(req, res) {
  Misc.findAll().then((miscs) => {
    res.json({miscs});
  });
});

module.exports = router;