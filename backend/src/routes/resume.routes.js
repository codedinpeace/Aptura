const express = require('express')
const router = express.Router()

const {protectRoute} = require('../middleware/protectroute.middleware')
const {saveResume, deleteResume, getResume} = require('../controllers/resume.controllers')

router.post("/create-resume", protectRoute, saveResume)
router.post("/delete-resume/:id", protectRoute, deleteResume)
router.get("/get-resume/:id", protectRoute, getResume)

module.exports = router``