import { QueryInterface } from 'sequelize';
module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
<<<<<<< HEAD:src/migrations/20200914155400-create-training.ts
    return queryInterface.createTable('Training', {
=======
    return queryInterface.createTable('Challenge', {
>>>>>>> e8955ae537419e79f828880967fd2988bf03c4c5:src/migrations/20200903090000-create-hero.ts
      id: {
        field:         'id',
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true
      },
      title: {
        field:  'title',
<<<<<<< HEAD:src/migrations/20200914155400-create-training.ts
        type:   Sequelize.STRING
      },
      date: {
        field:  'date',
        type:   Sequelize.DATE
      },
      description: {
        field:  'description',
        type:   Sequelize.STRING
=======
        type:   Sequelize.STRING,
        allowNull: false
      },
      description: {
        field:  'description',
        type:   Sequelize.STRING,
        allowNull: false
      },
      date: {
        field:  'date',
        type:   Sequelize.DATE,
        allowNull: false
>>>>>>> e8955ae537419e79f828880967fd2988bf03c4c5:src/migrations/20200903090000-create-hero.ts
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
<<<<<<< HEAD:src/migrations/20200914155400-create-training.ts
    return queryInterface.dropTable('Training');
=======
    return queryInterface.dropTable('Challenge');
>>>>>>> e8955ae537419e79f828880967fd2988bf03c4c5:src/migrations/20200903090000-create-hero.ts
  }
};
