const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleId:String,
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        maxLength:8,
        unique:true,
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String,
        minLength:8,
    },
    picture:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)