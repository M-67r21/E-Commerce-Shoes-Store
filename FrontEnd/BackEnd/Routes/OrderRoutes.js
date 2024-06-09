const express = require('express')
const router = express.Router()
const {verifyIsLoggedIn, verifyIsAdmin} = require("../CustomMiddlewares/VerifyAuthToken")
const {getUserOrders, getOrder, createOrder, updateOrderToPaid, updateOrderToDelivered, getOrders, getOrderForAnalysis} = require("../Controllers/OrderController")

//user routes
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders)
router.get("/user/:id", getOrder)
router.post("/", createOrder)
router.put("/paid/:id" , updateOrderToPaid)

//admin routes
router.use(verifyIsAdmin)
router.put("/delivered/:id", updateOrderToDelivered)
router.get("/admin", getOrders)
router.get("/analysis/:date", getOrderForAnalysis)

module.exports = router