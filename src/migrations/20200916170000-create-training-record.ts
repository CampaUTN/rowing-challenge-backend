import { QueryInterface } from 'sequelize';
module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.createTable('TrainingRecord', {
      id: {
        field:         'id',
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true
      },
      challengeId: {
        field:  'training_id',
        type:   Sequelize.NUMBER,
        references: {
          model: 'Training', 
          key: 'id'
        }
      },
      userId: {
        field:  'user_id',
        type:   Sequelize.NUMBER,
        references: {
          model: 'User', 
          key: 'id'
        }
      },
      time: {
        field:  'time',
        type:   Sequelize.STRING
      },
      kilometers: {
        field:  'kilometers',
        type:   Sequelize.FLOAT
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
    return queryInterface.dropTable('TrainingRecord');
  }
};
