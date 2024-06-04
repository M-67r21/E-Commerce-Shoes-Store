const express = require('express')
const router = express.Router()
const {getCategories, newCategory, deleteCategory, saveAttribute} = require("../Controllers/CategoryController")

router.get("/", getCategories)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAttribute)

module.exports = router