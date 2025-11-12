const AuthRoutes = require('../routes/auth.routes')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const middlewares = async (app) =>{
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(cors({
        origin:"http://localhost:5173",
        credentials:true
    }))
    app.use(cookieParser())
    
    app.use("/api/auth", AuthRoutes)
}

module.exports = {middlewares}