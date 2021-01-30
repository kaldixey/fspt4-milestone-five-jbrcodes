var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET student list
router.get("/", function(req, res, next) {
  db("SELECT * FROM students;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send({ error: err.message }));
});

// GET one student
//error doesn't work
router.get("/:id", function(req, res, next) {
  let id = req.params.id;
  let sql = `
    SELECT *
    FROM students
    WHERE id = ${id}
    ;`;
  db(sql)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send({ error: err.message }));
});

// INSERT a new student into the DB
//this doesn't work
router.post("/", function(req, res, next) {
  let student = req.body;
  let sql = `
    INSERT INTO students 
    (firstname, lastname) VALUES (${student.firstname}, ${student.lastname})
    ;`;
  db(sql)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send({ error: err.message }));
});

// DELETE a student from the DB
//also doesn't work
router.delete("/:id", function(req, res, next) {
  let id = req.params.id;
  let sql = `
  DELETE FROM students WHERE id = ${id}`;
  db(sql)
    .then(results => {
      res.send(results.data);
    })
    .catch((err = res.status(500).send({ error: err.message })));
});

module.exports = router;
