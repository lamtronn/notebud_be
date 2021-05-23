module.exports = (sequelize, Sequelize) => {
  const Liquid = sequelize.define("liquid", {
    liquid_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      // autoIncrement: true,
    },
    fertilizer_id: {
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
    },
    volume: {
      type: Sequelize.INTEGER,
    },
  });

  return Liquid;
};
