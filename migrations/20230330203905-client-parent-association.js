'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Clients', {
      fields: ['ParentId'],
      type: 'foreign key',
      name: 'client_parent_association',
      references: {
        table: 'Parents',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Clients', 'client_parent_association')
  }
};
