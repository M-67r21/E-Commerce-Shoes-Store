const express = require('express')
const router = express.Router()
const getOrders = require("../Controllers/OrderController")

router.get("/", getOrders)

module.exports = router