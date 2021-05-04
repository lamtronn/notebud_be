const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Title cannot be empty!" });
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Tutorial.create(tutorial)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Something bad happened!",
      })
    );
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((err) =>
      res.send(500).send({ message: err.message || "Something bad happened!" })
    );
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => res.send(data))
    .catch((err) =>
      res.send(500).send({ message: err.message || "Something bad happened!" })
    );
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Update successfully!" });
      } else {
        res.send({ message: "Cannot update" });
      }
    })
    .catch((err) =>
      res.send(500).send({ message: err.message || "Something bad happened!" })
    );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Delete successfully!" });
      } else {
        res.send({ message: "Cannot update" });
      }
    })
    .catch((err) =>
      res.send(500).send({ message: err.message || "Something bad happened!" })
    );
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({ where: {}, truncate: false })
    .then((num) => {
      res.send({ message: `${num} were deleted successfully!` });
    })
    .catch((err) =>
      res.send(500).send({ message: err.message || "Something bad happened!" })
    );
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  const title = req.query.title;
  const condition = title ? { published: true } : null;

  Tutorial.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Something bad happened!!!",
      })
    );
};
