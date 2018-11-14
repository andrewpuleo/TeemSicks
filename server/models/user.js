'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Session);
  };
  return User;
};