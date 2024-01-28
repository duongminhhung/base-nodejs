'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'role_id', {
      type: Sequelize.INTEGER,
      defaultValue: 2
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'role_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};
