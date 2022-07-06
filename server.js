const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
require('dotenv').config();

app.use(express.json())

connectDB()


//console.log(process.env)

app.use("/products",require('./routes/productRoutes'))


const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))