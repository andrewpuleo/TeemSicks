
const express = require('express');
const { Order } = require('../models');
const router = express.Router();
router.route('/')

  // get all orders
  .get((req, res) => {
    Order.findAll().then((orders) => {
      res.json({
        orders,
      });
    });
  })

  //Create an order item
  .post((req, res) => {
    const {
      orderId,
      userId,
      addressId,
      

    } = req.body;
    // validate potentially here
    Order.create({
      orderId,
      userId,
      addressId,
   }).then((order) => {
      res.json(order);
    });
});

router.route('/:id')

    // get a specific product using an id
    .get((req, res) => {
      Order.findById(req.params.id).then((order) => {
        res.json({order});
      });
    })

module.exports = router;
