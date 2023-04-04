'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
        gid: {
              type: Sequelize.UUID,
              allowNull: false,
              defaultValue: Sequelize.UUIDV4,
              primaryKey: true,
          },

          id: {
              type: Sequelize.INTEGER,
              unique: true,
              autoIncrement: true,
              allowNull: false,
          },

          // ParentId: {
          //     type: Sequelize.INTEGER,
          // },

          ClientId: {
              type: Sequelize.INTEGER,
          },

          name: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false,
          },

          root_path: {
            type: Sequelize.STRING(50),
            allowNull: true,
          },

          is_active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
          },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};