OrderItem

const express = require('express');
const { OrderItem } = require('../models');
const router = express.Router();

router.route('/')

  // get all orderItems
  .get((req, res) => {
    OrderItem.findAll().then((orderitems) => {
      res.json({
        orderitems,
      });
    });
  })
//Create an order item
  .post((req, res) => {
    const {
      productId,
      orderid,
      quantity,
      price,

    } = req.body;
    // validate potentially here
    OrderItem.create({
        productId,
        orderid,
        quantity,
        price,
   }).then((orderitem) => {
      res.json(orderitem);
    });
});

router.route('/:id')

    // get a specific product using an id
    .get((req, res) => {
        OrderItem.findById(req.params.id).then((orderitem) => {
        res.json({orderitem});
      });
    })


      .delete((req, res) => {
        const idToDelete = req.params.id;
        OrderItem.findById(idToDelete).then((orderitem) => {
            orderitem.destroy().then(() => {
            res.json({ delete: true });
          });
        });
      });
module.exports = router;
