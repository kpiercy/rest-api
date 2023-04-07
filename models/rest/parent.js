'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parent.init(
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

          erp_code: {
              type: DataTypes.STRING(20),
              allowNull: true,
          },
      },
      {
          defaultScope: {
              attributes: {
                  exclude: ['gid'],
              },
          },
          sequelize,
          modelName: 'Job',
          //   scopes: {
          //       accessLevel(value) {
          //           return {
          //               where: {
          //                   accessLevel: {
          //                       [Op.gte]: value,
          //                   },
          //               },
          //           }
          //       },
          //       sequelize,
          //       modelName: 'Job',
          //   },
      }
  )
  Parent
      .sync()
      .then(() => {
          console.log('Parent table synced successfully')
      })
      .catch((error) => {
          console.error('Unable to sync Parent table: ', error)
      })
  return Parent;
};