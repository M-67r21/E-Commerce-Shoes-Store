const express = require('express')
const router = express.Router()
const {getCategories, newCategory, deleteCategory, saveAttribute} = require("../Controllers/CategoryController")
const {verifyIsLoggedIn, verifyIsAdmin} = require("../CustomMiddlewares/VerifyAuthToken")

router.get("/", getCategories)
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAttribute)

module.exports = router