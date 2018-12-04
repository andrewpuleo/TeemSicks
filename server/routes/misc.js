var express = require('express');
var router = express.Router();
const { Misc } = require('../models');

/* GET all misc data */
router.get('/', function(req, res) {
  Misc.findAll().then((miscs) => {
    res.json({miscs});
  });
});

router.route('/:id')
  // update a given misc
  .put((req, res) => {
    const { purpose, description, addressId } = req.body;
    console.log(req.body)
    Misc.findById(req.params.id).then((misc) => {
      const miscToUpdate = misc;
      miscToUpdate.purpose = purpose;
      miscToUpdate.description = description;
      miscToUpdate.addressId = addressId;
      miscToUpdate.save().then((updatedMisc) => {
        res.json(updatedMisc);
      });
    });
  });

module.exports = router;