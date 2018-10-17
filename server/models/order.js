'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderId: DataTypes.STRING,
    date: DataTypes.INTEGER,
    numItems: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};