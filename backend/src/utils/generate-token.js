const jwt = require('jsonwebtoken')

const generateToken = (userId, res) =>{
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"1d"})
        res.cookie("token", token)
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error);
    }
}

module.exports = {generateToken}