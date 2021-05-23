module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    role_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      // autoIncrement: true,
    },
    type: {
      type: Sequelize.UUID,
      values: ["user", "admin"],
    },
  });
  return Role;
};
