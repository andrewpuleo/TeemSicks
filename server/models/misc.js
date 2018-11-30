'use strict';
module.exports = (sequelize, DataTypes) => {
  const Misc = sequelize.define('Misc', {
    purpose: DataTypes.STRING,
    description: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {});
  Misc.associate = function(models) {
    // associations can be defined here
  };
  return Misc;
};