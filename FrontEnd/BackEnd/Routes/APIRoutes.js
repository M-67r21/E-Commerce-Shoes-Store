const express = require("express")
const app = express()
const ProjectRoutes = require("./ProductRoutes.js")

app.use("/products", ProjectRoutes)

module.exports = app