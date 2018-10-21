'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    type: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};