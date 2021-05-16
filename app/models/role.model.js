module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    role_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: Sequelize.STRING,
      values: ["user", "admin"],
    },
  });
  return Role;
};
