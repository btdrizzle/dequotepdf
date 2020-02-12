'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('Part', {
    partNumber: DataTypes.STRING,
    partType: DataTypes.STRING,
    partDescription: DataTypes.STRING,
    partPrice: DataTypes.DECIMAL,
    inStock: DataTypes.BOOLEAN,
    partPath: DataTypes.STRING
  }, {});
  Part.associate = function(models) {
    // associations can be defined here
  };
  return Part;
};