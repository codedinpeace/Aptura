const express = require('express')
const router = express.Router()

const {protectRoute} = require('../middleware/protectroute.middleware')
const {saveResume} = require('../controllers/resume.controllers')

router.post("/create-resume", protectRoute, saveResume)

module.exports = router