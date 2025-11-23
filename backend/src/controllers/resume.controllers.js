const resumeModel = require('../models/resume.model')

const saveResume = async (req,res) =>{

    const {name, phone, email, location, linkedin, twitter, instagram, github, summary, projects, skills, experience, education} = req.body

    try {
            const savedResume = await resumeModel.create({
                introduction:{name},
                contact:{phone, email, location},
                socials:{linkedin, twitter, instagram, github},
                summary:summary,
                projects:projects,
                skills:skills,
                experience:experience,
                education:education,
            })

            res.status(200).json({message:"Resume created successfully", savedResume})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }

}

const deleteResume = async (req,res)=>{
    
    const {id} = req.params 

    try {
        const resume = await resumeModel.findOne(id)
        if(!resume) return res.status(400).json({message:"Resume not found"})

            await resume.deleteOne()
            res.status(200).json({message:"Resume deleted successfully"})
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

const getResume = async (req,res) =>{
    
    const {id} = req.params

    try {
        const resume = await resumeModel.findOne(id)
        if(!resume) return res.status(404).json({message:"Resume not found"})
            res.status(200).json({resume})

    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
        console.log(error)
    }
}

module.exports = {saveResume, deleteResume, getResume}

