module.exports = (sequelize, Sequelize) => {
  const Journal = sequelize.define("journal", {
    journal_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    prunning: {
      type: Sequelize.STRING,
    },
    misc: {
      type: Sequelize.STRING,
    },
    weather: {
      type: Sequelize.STRING,
    },
    temperature: {
      type: Sequelize.INTEGER,
    },
    humidity: {
      type: Sequelize.INTEGER,
    },
    sunlight_hour: {
      type: Sequelize.INTEGER,
    },
  });

  return Journal;
};
