module.exports = (sequelize, Sequelize) => {
  const Water = sequelize.define("water", {
    water_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      // autoIncrement: true,
    },
    journal_id: {
      type: Sequelize.UUID,
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
