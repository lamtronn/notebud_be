module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      // autoIncrement: true,
    },
    role_id: {
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
