import { QueryInterface } from 'sequelize';
module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.createTable('ChallengeRecord', {
      id: {
        field:         'id',
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true
      },
      challengeId: {
        field:  'challenge_id',
        type:   Sequelize.INTEGER,
        references: {
          model: 'Challenge', 
          key: 'id'
        }
      },
      userId: {
        field:  'user_id',
        type:   Sequelize.INTEGER,
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
    return queryInterface.dropTable('ChallengeRecord');
  }
};
