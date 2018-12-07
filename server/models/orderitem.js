'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    productId: DataTypes.INTEGER,
    orderid: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
  };
  return OrderItem;
};
