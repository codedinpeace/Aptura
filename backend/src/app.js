const express = require('express')
const {connectDB} = require('./db/db')
require('dotenv').config()
const {middlewares} = require('./middleware/app.middlewares')

// App initialization
const app = express()

// Connecting Database
connectDB()

// Initializing middlewares
middlewares(app)

app.get("/", (req,res)=>{
    res.send("Hello World")
})


module.exports = app