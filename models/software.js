'use strict';
module.exports = (sequelize, DataTypes) => {
  const Software = sequelize.define('Software', {
    os: DataTypes.STRING,
    osVersion: DataTypes.STRING,
    browser: DataTypes.STRING,
    browserVersion: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "Software"
  });
  Software.associate = function(models) {
    // associations can be defined here
    Software.hasOne(models.IP);
  };
  return Software;
};