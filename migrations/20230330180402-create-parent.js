'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parents', {
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

        name: {
            type: Sequelize.STRING(100),
            unique: true,
            allowNull: false,
        },

        status: {
            type: Sequelize.STRING(15),
            allowNull: false,
            validate: {
                isIn: [['Live', 'Hold', 'Sample', 'Proof']],
            },
        },

        erp_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },

        erp_code: {
            type: Sequelize.STRING(20),
            allowNull: true,
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
    await queryInterface.dropTable('Parents');
  }
};