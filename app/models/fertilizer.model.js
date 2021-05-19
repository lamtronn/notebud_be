module.exports = (sequelize, Sequelize) => {
  const Fertilizer = sequelize.define("fertilizer", {
    fertilizer_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    journal_id: {
      type: Sequelize.INTEGER,
    },
    compost_tea: {
      type: Sequelize.STRING,
    },
  });

  return Fertilizer;
};
