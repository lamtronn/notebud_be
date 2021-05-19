module.exports = (sequelize, Sequelize) => {
  const Water = sequelize.define("water", {
    water_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    journal_id: {
      type: Sequelize.INTEGER,
    },
    volume: {
      type: Sequelize.INTEGER,
    },
    ph: {
      type: Sequelize.INTEGER,
    },
    ppm: {
      type: Sequelize.INTEGER,
    },
    ec: {
      type: Sequelize.INTEGER,
    },
  });

  return Water;
};
