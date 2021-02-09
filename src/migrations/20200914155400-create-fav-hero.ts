module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserFavoriteHero', {
      id: {
        field:         'id',
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true
      },
      userId: {
        field:      'user_id',
        type:       Sequelize.INTEGER,
        references: {
          model:  'User',
          key:    'id'
        },
        onDelete:   'CASCADE',
        onUpdate:   'CASCADE'
      },
      heroId: {
        field:      'hero_id',
        type:       Sequelize.INTEGER,
        references: {
          model:  'Hero',
          key:    'id'
        },
        onDelete:   'CASCADE',
        onUpdate:   'CASCADE',
        unique:     true
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserFavoriteHero');
  }
};
