const db = require("../models");
// const Role = db.Role;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }
  });
  next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;
