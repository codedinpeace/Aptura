const express = require('express')
const router = express.Router() 
const {register, login, logout, edit, sendCode, check} = require('../controllers/auth.controller')
const {protectRoute} = require('../middleware/protectroute.middleware')

router.post("/register", register)
router.post ("/login", login)
router.post("/logout", logout)
router.post("/edit/:id", edit)
router.post("/send-code", sendCode)
router.get("/check", protectRoute, check)

module.exports = router