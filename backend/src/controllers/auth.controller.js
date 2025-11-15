const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/generate-token')
const {sendEmail, SendEditCode} = require('../utils/SendEmail')

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
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user) return res.status(409).json({message:"User doesn't exist"})
            const comparedPassword = await bcrypt.compare(password, user.password)
        if(!comparedPassword) return res.status(409).json({message:"Incorrect email or password"})
            generateToken(user._id, res)
        res.status(200).json({message:"User Logged In Successfully", user})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}
const logout = async (req,res)=>{
try {
    await res.cookie("token", "")
    res.status(200).json({message:"User Logged Out successfully"})
} catch (error) {
    res.status(400).json({message:"Something went wrong"})
    console.log(error)
}
}
const sendCode = async (req,res)=>{
    const {email} = req.body
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    try {
        await SendEditCode(code, email)
        await userModel.findOneAndUpdate({email}, {updateCode:code}, {new:true})
        res.status(200).json({message:"Code sent successfully"})
    } catch (error) {
       res.status(400).json({message:"Something went wrong"})
       console.log(error)
    }
}
const edit = async (req,res)=>{
    const {id} = req.params
    const {name, username, email, password, code} = req.body    
    try {
        const hashedPassword = await bcrypt.hash(password,10)
         const user = await userModel.findOne({_id:id})
         if(Number(code) !== Number(user.updateCode)) return res.status(409).json({message:"Invalid Code"})
            const updatedUser = await userModel.findOneAndUpdate({_id:id}, {name:name, username:username, email:email, password:hashedPassword}, {new:true})
        res.status(200).json({message:"Profile updated successfully", updatedUser})
} catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}
const check = async (req,res)=>{

}

module.exports = {register, login, logout, edit, sendCode, check, verify}