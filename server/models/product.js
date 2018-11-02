'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    Brand: DataTypes.STRING,
    Price: DataTypes.DOUBLE,
    onSale: DataTypes.BOOLEAN,
    salePrice: DataTypes.DOUBLE,
    productDescription: DataTypes.TEXT,
    inStock: DataTypes.BOOLEAN,
    amountInStock: DataTypes.INTEGER,
    color: DataTypes.STRING,
    photoUrl: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.OrderItem);
  };
  return Product;
};
