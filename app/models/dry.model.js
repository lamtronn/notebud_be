module.exports = (sequelize, Sequelize) => {
  const Dry = sequelize.define("dry", {
    dry_id: {
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

  return Dry;
};
