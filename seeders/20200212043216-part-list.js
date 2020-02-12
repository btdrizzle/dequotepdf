'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Parts', [{
        partNumber: "403103",
        partType: "Retainer",
        partDescription: "Teflon Screw-in Retainer",
        partPrice: 25,
        inStock: true,
        partPath: "403103.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "500096",
        partType: "Preamplifier",
        partDescription: "Preamplifier with pulse PA1001A-1",
        partPrice: 500,
        inStock: true,
        partPath: "PA1001A-1.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "500094",
        partType: "Preamplifier",
        partDescription: "FH710 Sens TLM 73 96 574",
        partPrice: 450,
        inStock: true,
        partPath: "500094.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "500091",
        partType: "Preamplifier",
        partDescription: "FH710 CO 73 97 938",
        partPrice: 450,
        inStock: true,
        partPath: "500091.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "500090",
        partType: "Preamplifier",
        partDescription: "FH710 Std 73 99 252",
        partPrice: 450,
        inStock: true,
        partPath: "500090.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "510032",
        partType: "Preamplifier",
        partDescription: "FH710 Standard + Int-B01",
        partPrice: 570,
        inStock: true,
        partPath: "500090.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "500886",
        partType: "Pick Up Coil",
        partDescription: "PC45.25",
        partPrice: 550,
        inStock: true,
        partPath: "500886.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "L00003",
        partType: "Bearing Kit",
        partDescription: "2in TZN50 TC",
        partPrice: 2680,
        inStock: true,
        partPath: "L00003.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "L00012",
        partType: "Bearing Kit",
        partDescription: "3in TZN80 TC",
        partPrice: 2890,
        inStock: true,
        partPath: "L00012.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
      {
        partNumber: "L00006",
        partType: "Bearing Kit",
        partDescription: "6in TZN150 Graphite",
        partPrice: 3300,
        inStock: true,
        partPath: "L00006.png",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Parts', null, {});

  }
};
