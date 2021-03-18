module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        field:         'id',
        type:          Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:    true
      },
      name:         Sequelize.DataTypes.STRING,
      lastName:     Sequelize.DataTypes.STRING,
      email:        { 
        field:      'email',
        type:       Sequelize.DataTypes.STRING,
        unique: true
      },
      password:     Sequelize.DataTypes.STRING, 
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
    return queryInterface.dropTable('User');
  }
};
