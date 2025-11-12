const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/generate-token')

const register = async (req,res)=>{ 
    const {name,username,email,password} = req.body
    try {
        const alreadyExisting = await userModel.findOne({email})
        if(alreadyExisting) return res.status(409).json({message:"User already exists"})
            const hashedPassword = await bcrypt.hash( password, 10)
                const user = await userModel.create({
                    name,
                    username,
                    email,
                    password:hashedPassword,
                })
                generateToken(user._id,res)
                res.status(200).json({message:"User created sucessfully", user})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)        
    }
}
const login = async (req,res)=>{
    
}
const logout = async (req,res)=>{

}
const edit = async (req,res)=>{

}
const sendCode = async (req,res)=>{

}
const check = async (req,res)=>{

}

module.exports = {register, login, logout, edit, sendCode, check}