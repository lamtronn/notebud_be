module.exports = (sequelize, Sequelize) => {
  const Fertilizer = sequelize.define("fertilizer", {
    fertilizer_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      // autoIncrement: true,
    },
    journal_id: {
      type: Sequelize.UUID,
    },
    compost_tea: {
      type: Sequelize.STRING,
    },
  });

  return Fertilizer;
};
