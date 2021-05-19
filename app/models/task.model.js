module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    task_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    journal_id: {
      type: Sequelize.INTEGER,
    },
    task_type: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.STRING,
    },
    reminder_type: {
      type: Sequelize.STRING,
    },
    reminder_value: {
      type: Sequelize.INTEGER,
    },
    start_date: {
      type: Sequelize.STRING,
    },
  });

  return Task;
};