module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserFavoriteHero', 'UserFavoriteHero_hero_id_key');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserFavoriteHero', ['hero_id'], { unique: true });
  }
};
