
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

      userId,
      addressId,
      status,


    } = req.body;
    // validate potentially here
    Order.create({
      
      userId,
      addressId,
      status,
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

  .put((req, res) => {
    const{userId, addressId, status} = req.body;
    Order.findById(req.params.id).then((order)=> {
      const orderToUpdate = order;
      orderToUpdate.userId = userId;
      orderToUpdate.addressId = addressId;
      orderToUpdate.status = status;
      orderToUpdate.save().then((updatedOrder)=>{
        res.json(updatedOrder);
      });
    });
  });

module.exports = router;
