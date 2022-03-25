const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");
const router = express.Router();

router.get("/", crudController(Book).getAll);
router.get("/:id", crudController(Book).getOne);

router.post("/", crudController(Book).post);
router.patch("/:id", crudController(Book).updateOne);
router.delete("/:id", crudController(Book).deleteOne);

module.exports = router;