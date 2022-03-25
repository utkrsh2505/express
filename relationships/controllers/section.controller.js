const express = require("express");
const Section = require("../models/section.model");
const router = express.Router();
const crudController = require("./crud.controller")
router.get("/", crudController(Section).getAll);
router.get("/:id", crudController(Section).getOne);

router.post("/", crudController(Section).post);
router.patch("/:id", crudController(Section).updateOne);
router.delete("/:id", crudController(Section).deleteOne);

module.exports = router;