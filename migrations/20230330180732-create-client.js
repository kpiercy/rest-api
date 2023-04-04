'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
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

        ParentId: {
            type: Sequelize.INTEGER,
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

        erp_parent_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },

        erp_code: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },

        erp_alt_code: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },

        erp_pos_code: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },

        type: {
            type: Sequelize.STRING(15),
            allowNull: false,
            validate: {
                isIn: [['Direct', 'Reseller', 'AdHoc', 'StandAlone']],
            },
        },

        terms: {
            type: Sequelize.STRING(15),
            allowNull: false,
            validate: {
                isIn: [['NET10', 'NET30', 'NET60', 'NET90', 'NET120']],
            },
        },

        taxable: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },

        tax_exempt: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },

        postage_cost: {
            type: Sequelize.DECIMAL(5, 4),
            defaultValue: 0.497,
        },

        postage_sell: {
            type: Sequelize.DECIMAL(5, 4),
            defaultValue: 0.0,
        },

        aio_invoice: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },

        cost_only: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },

        bulk_bill: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
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
    await queryInterface.dropTable('Clients');
  }
};