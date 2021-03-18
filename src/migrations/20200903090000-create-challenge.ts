import { QueryInterface } from 'sequelize';
module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.createTable('Challenge', {
      id: {
        field:         'id',
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true
      },
      title: {
        field:  'title',
        type:   Sequelize.STRING
      },
      date: {
        field:  'date',
        type:   Sequelize.DATE
      },
      description: {
        field:  'description',
        type:   Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        type:  Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type:  Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type:  Sequelize.DATE
      }
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('Challenge');
  }
};
