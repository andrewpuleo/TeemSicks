
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
  });

//   .post((req, res) => {
//     const {
//       productId,
//       productName,
//       Brand,
//       Price,
//       onSale,
//       salePrice,
//       productDescription,
//       inStock,
//       amountInStock,
//       color,
//       photoUrl,

//     } = req.body;
//     // validate potentially here
//     Product.create({
//       productId,
//       productName,
//       Brand,
//       Price,
//       onSale,
//       salePrice,
//       productDescription,
//       inStock,
//       amountInStock,
//       color,
//       photoUrl,
//    }).then((product) => {
//       res.json(product);
//     });
// });

// router.route('/:id')

//     // get a specific todo
//     .get((req, res) => {
//       Product.findById(req.params.id).then((product) => {
//         res.json({product});
//       });
//     })

  /*
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
*/
module.exports = router;
