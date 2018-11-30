'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderId: DataTypes.STRING,
    userId: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User);
    Order.belongsTo(models.Address);
    Order.belongsTo(models.OrderItem);
  };

  return Order;

};
