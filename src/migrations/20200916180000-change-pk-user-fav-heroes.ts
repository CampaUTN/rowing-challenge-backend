module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserFavoriteHero', 'UserFavoriteHero_pkey');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserFavoriteHero', ['id'], { primaryKey: true });
  }
};
