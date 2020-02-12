'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partNumber: {
        type: Sequelize.STRING
      },
      partType: {
        type: Sequelize.STRING
      },
      partDescription: {
        type: Sequelize.STRING
      },
      partPrice: {
        type: Sequelize.DECIMAL
      },
      inStock: {
        type: Sequelize.BOOLEAN
      },
      partPath: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parts');
  }
};