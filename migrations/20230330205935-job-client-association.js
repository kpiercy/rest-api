'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('Jobs', {
            fields: ['ClientId'],
            type: 'foreign key',
            name: 'job_client_association',
            references: {
                table: 'Clients',
                field: 'id',
            },
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('Jobs', 'job_client_association')
    },
}
