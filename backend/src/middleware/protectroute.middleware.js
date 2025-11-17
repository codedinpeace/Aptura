const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const protectRoute = async (req,res,next) =>{
    const token = req.cookies.token
    if(!token) return res.status(400).json({message:"User not found"})
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.userId)
        req.user = user
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

module.exports = {protectRoute}