'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.renameColumn('Jobs', 'is_active', 'isActive', {
                transaction,
            }),
                await queryInterface.renameColumn(
                    'Jobs',
                    'root_path',
                    'rootPath',
                    {
                        transaction,
                    }
                )
        })
    }
}


