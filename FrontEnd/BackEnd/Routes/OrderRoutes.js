const express = require('express')
const router = express.Router()
const {verifyIsLoggedIn, verifyIsAdmin} = require("../CustomMiddlewares/VerifyAuthToken")
const getUerOrders = require("../Controllers/OrderController")

//user routes
router.use(verifyIsLoggedIn)
router.get("/", getUerOrders)

//admin routes
router.use(verifyIsAdmin)

module.exports = router