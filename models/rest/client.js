'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.belongsTo(models.Parent)
      models.Parent.hasMany(Client)
    }
  }
  Client.init(
      {
          gid: {
              type: DataTypes.UUID,
              allowNull: false,
              defaultValue: DataTypes.UUIDV4,
              primaryKey: true,
          },

          id: {
              type: DataTypes.INTEGER,
              unique: true,
              autoIncrement: true,
              allowNull: false,
          },

          ParentId: {
              type: DataTypes.INTEGER,
          },

          name: {
              type: DataTypes.STRING(100),
              unique: true,
              allowNull: false,
          },

          status: {
              type: DataTypes.STRING(15),
              allowNull: false,
              validate: {
                  isIn: [['Live', 'Hold', 'Sample', 'Proof']],
              },
          },

          erp_id: {
              type: DataTypes.INTEGER,
              allowNull: true,
          },

          erp_parent_id: {
              type: DataTypes.INTEGER,
              allowNull: true,
          },

          erp_code: {
              type: DataTypes.STRING(20),
              allowNull: true,
          },

          erp_alt_code: {
              type: DataTypes.STRING(20),
              allowNull: true,
          },

          erp_pos_code: {
              type: DataTypes.STRING(20),
              allowNull: true,
          },

          type: {
              type: DataTypes.STRING(15),
              allowNull: false,
              validate: {
                  isIn: [['Direct', 'Reseller', 'AdHoc', 'StandAlone']],
              },
          },

          terms: {
              type: DataTypes.STRING(15),
              allowNull: false,
              validate: {
                  isIn: [['NET10', 'NET30', 'NET60', 'NET90', 'NET120']],
              },
          },

          taxable: {
              type: DataTypes.BOOLEAN,
              defaultValue: true,
          },

          tax_exempt: {
              type: DataTypes.BOOLEAN,
              defaultValue: false,
          },

          postage_cost: {
              type: DataTypes.DECIMAL(5, 4),
              defaultValue: 0.497,
          },

          postage_sell: {
              type: DataTypes.DECIMAL(5, 4),
              defaultValue: 0.0,
          },

          aio_invoice: {
              type: DataTypes.BOOLEAN,
              defaultValue: false,
          },

          cost_only: {
              type: DataTypes.BOOLEAN,
              defaultValue: true,
          },

          bulk_bill: {
              type: DataTypes.BOOLEAN,
              defaultValue: false,
          },
      },
      {
          sequelize,
          modelName: 'Client',
      }
  )
    Client.sync()
        .then(() => {
            console.log('Client table synced successfully')
        })
        .catch((error) => {
            console.error('Unable to sync Client table: ', error)
        })
  return Client;
};