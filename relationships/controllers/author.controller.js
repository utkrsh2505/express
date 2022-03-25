const express = require("express");
const router = express.Router();
const Author = require("../models/author.model");
const crudController = require("./crud.controller");

router.get("/", crudController(Author).getAll);
router.get("/:id", crudController(Author).getOne);

router.post("/", crudController(Author).post);
router.patch("/:id", crudController(Author).updateOne);
router.delete("/:id", crudController(Author).deleteOne);


module.exports = router;