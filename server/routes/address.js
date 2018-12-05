
const express = require('express');
const { Address } = require('../models');
const router = express.Router();
router.route('/')

  // get all addresses
  .get((req, res) => {
    Address.findAll().then((address) => {
      res.json({
        address,
      });
    });
  })

  //Create an address
  .post((req, res) => {
    const {
      addressId,
      street1,
      street2,
      city,
      state,
      zip,
      country,
      
    } = req.body;
    // validate potentially here
    Address.create({
        addressId,
        street1,
        street2,
        city,
        state,
        zip,
        country,
   }).then((address) => {
      res.json(address);
    });
});

router.route('/:id')

    // get a specific address using an id
    .get((req, res) => {
        Address.findById(req.params.id).then((address) => {
        res.json({address});
      });
    })

module.exports = router;
