const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/generate-token')
const {sendEmail} = require('../utils/SendEmail')

const register = async (req,res)=>{ 
    const {name,username,email,password} = req.body
    const code = Math.floor(100000 + Math.random() * 900000);

    try {
        const alreadyExisting = await userModel.findOne({email})
        if(alreadyExisting) return res.status(409).json({message:"User already exists"})
            const hashedPassword = await bcrypt.hash( password, 10)
                const user = await userModel.create({
                    name,
                    username,
                    email,
                    password:hashedPassword,
                    code:code,
                    isVerified:false,
                })
                
                await sendEmail(code, email)

                res.status(200).json({message:"Code sent successfully", user})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)        
    }
}
const verify = async (req,res)=>{
    const {enteredCode,email} = req.body
    
    try {
        const user = await userModel.findOne({email})
        if(Number(enteredCode) !== Number(user.code)) return res.status(400).json({message:"The code you entered is wrong"})
            await userModel.findOneAndUpdate({email}, {isVerified:true}, {new:true})
        generateToken(user._id, res)
        res.status(200).json({message:"User created Successfully"})
    } catch (error) {
        res.status(400).json({message:"Somethig went wrong"})
        console.log(error)
    }
}
const login = async (req,res)=>{
    ``
}
const logout = async (req,res)=>{

}
const edit = async (req,res)=>{

}
const sendCode = async (req,res)=>{

}
const check = async (req,res)=>{

}

module.exports = {register, login, logout, edit, sendCode, check, verify}