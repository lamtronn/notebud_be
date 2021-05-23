module.exports = (sequelize, Sequelize) => {
  const IPM = sequelize.define("ipm", {
    ipm_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      // autoIncrement: true,
    },
    journal_id: {
      type: Sequelize.UUID,
    },
    pest_name: {
      type: Sequelize.STRING,
    },
    control_method: {
      type: Sequelize.STRING,
    },
  });

  return IPM;
};
