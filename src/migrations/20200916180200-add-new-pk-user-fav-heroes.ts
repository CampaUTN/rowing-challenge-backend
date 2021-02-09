module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserFavoriteHero', ['hero_id','user_id'], { type: 'primary key',
      name: 'UserFavoriteHero_pkey' });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserFavoriteHero', 'UserFavoriteHero_pkey');
  }
};
