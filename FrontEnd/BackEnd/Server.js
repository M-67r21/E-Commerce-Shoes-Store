const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const APIRoutes = require("./Routes/APIRoutes")

app.get('/', async (req, res, next) => {
    res.json({message: "API running..."})
});

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