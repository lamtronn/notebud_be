const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.journal = require("./journal.model.js")(sequelize, Sequelize);
db.task = require("./task.model.js")(sequelize, Sequelize);
db.water = require("./water.model.js")(sequelize, Sequelize);
db.fertilizer = require("./fertilizer.model.js")(sequelize, Sequelize);

const User = db.user;
const Role = db.role;
const Journal = db.journal;
const Task = db.task;
const Water = db.water;
const Fertilizer = db.fertilizer;

User.hasMany(Journal, { foreignKey: "user_id" });
Role.hasMany(User, { foreignKey: "role_id" });
Journal.hasMany(Task, { foreignKey: "journal_id" });

Journal.hasOne(Water, { foreignKey: "journal_id", targetKey: "journal_id" });
Water.belongsTo(Journal, { foreignKey: "journal_id", targetKey: "journal_id" });

Journal.hasOne(Fertilizer, { foreignKey: "journal_id" });
Fertilizer.belongsTo(Journal, { foreignKey: "journal_id" });

module.exports = db;
