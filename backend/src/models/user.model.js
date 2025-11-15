const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        maxLength:12,
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
    code:{
        type:String,
    },
    isVerified:{
        type:Boolean
    },
    updateCode:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)