const express = require("express");
const knex = require("knex");

const db = require("../data/dbConfig");
const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve data" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .first()
    .then(cars => res.json(car))
    .catch(err => {
      res.status(500).json({ message: "failed to retrive data" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      res.status(500).json({ message: "failed to store data" });
    });
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then(() => res.status(200).json("deleted item"))
    .catch(error => {
      res.status(500).json({ message: "could not remove" });
    });
});

router.put("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .update(req.body)
    .then(car => {
      car
        ? res.status(200).json({ message: "updated car" })
        : res.status(404).json({ message: "car not updated" });
    })
    .catch(error => res.status(500).json({ message: "failed to update" }));
});
module.exports = router;
