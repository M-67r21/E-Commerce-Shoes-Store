const express = require("express")
const app = express()
const ProjectRoutes = require("./ProductRoutes.js")
const CategoryRoutes = require("./CategoryRoutes.js")
const UserRoutes = require("./UserRoutes.js")
const OrderRoutes = require("./OrderRoutes.js")

app.use("/products", ProjectRoutes)
app.use("/categories", CategoryRoutes)
app.use("/users", UserRoutes)
app.use("/orders", OrderRoutes)

module.exports = app