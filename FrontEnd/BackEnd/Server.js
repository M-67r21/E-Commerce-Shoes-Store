const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.json({message: "API running..."})
})

app.get('/api/products', (req, res) => {
    res.send("Handling product routes")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})