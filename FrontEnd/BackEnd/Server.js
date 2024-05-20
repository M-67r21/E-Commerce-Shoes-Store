const express = require('express')
const app = express()
const port = 3000

const APIRoutes = require("./Routes/APIRoutes")

app.get('/', async (req, res) => {
    const Product = require("./Models/ProductModel")
    try {
        const product = new Product
        product.name = "New product name"
        const productSaved = await product.save()
        console.log(productSaved === product)
        const products = await Product.find()
        console.log(products.length)
        res.send("Product created" + product._id)
    } catch (er) {
        next(er) 
    }
    res.json({message: "API running..."})
})

//mongodb connection
const connectDB = require("./Config/db")
connectDB();

app.use('/api', APIRoutes)

app.use((error, req, res, next) =>{
    console.log(error)
    next(error)
})

app.use((error, req, res, next) =>{
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})