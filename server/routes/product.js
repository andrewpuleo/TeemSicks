const express = require('express');
const { Product } = require('../models');
const router = express.Router();

router.route('/')

  // get all products
  .get((req, res) => {
    Product.findAll().then((products) => {
      res.json({
        products,
      });
    });
  })

  .post((req, res) => {
    const {
      productId,
      productName,
      Brand,
      Price,
      onSale,
      salePrice,
      productDescription,
      inStock,
      amountInStock,
      color,
      photoUrl,

    } = req.body;
    // validate potentially here
    Product.create({
      productId,
      productName,
      Brand,
      Price,
      onSale,
      salePrice,
      productDescription,
      inStock,
      amountInStock,
      color,
      photoUrl,
   }).then((product) => {
      res.json(product);
    });
});

router.route('/:id')

    // get a specific product using an id
    .get((req, res) => {
      Product.findById(req.params.id).then((product) => {
        res.json({product});
      });
    })

    // update a given product
      .put((req, res) => {
        const { Price, onSale, salePrice, inStock, amountInStock, color} = req.body;
        Product.findById(req.params.id).then((product) => {
          const productToUpdate = product;
          productToUpdate.Price = Price;
          productToUpdate.onSale = onSale;
          productToUpdate.salePrice = salePrice;
          productToUpdate.inStock = inStock;
          productToUpdate.amountInStock = amountInStock;
          productToUpdate.color = color;
          productToUpdate.save().then((updatedProduct) => {
            res.json(updatedProduct);
          });
        });
      })

      .delete((req, res) => {
        const idToDelete = req.params.id;
        Product.findById(idToDelete).then((product) => {
          product.destroy().then(() => {
            res.json({ delete: true });
          });
        });
      });
module.exports = router;
