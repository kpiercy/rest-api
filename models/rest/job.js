'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.Client)
      models.Client.hasMany(Job)
      // Job.belongsTo(models.Parent)
      // models.Parent.hasMany(Job)
    }
  }
  Job.init(
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

          // ParentId: {
          //     type: DataTypes.INTEGER,
          // },

          ClientId: {
              type: DataTypes.INTEGER,
          },

          name: {
              type: DataTypes.STRING(50),
              unique: true,
              allowNull: false,
          },

          rootPath: {
              type: DataTypes.STRING(50),
              allowNull: true,
          },

          isActive: {
              type: DataTypes.BOOLEAN,
              defaultValue: true,
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
    Job.sync()
        .then(() => {
            console.log('Job table synced successfully')
        })
        .catch((error) => {
            console.error('Unable to sync Job table: ', error)
        })
  return Job;
};