'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productId: DataTypes.STRING,
    productName: DataTypes.STRING,
    Brand: DataTypes.STRING,
    Type: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    onSale: DataTypes.BOOLEAN,
    salePrice: DataTypes.FLOAT,
    productDescription: DataTypes.STRING,
    inStock: DataTypes.BOOLEAN,
    amountInStock: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
