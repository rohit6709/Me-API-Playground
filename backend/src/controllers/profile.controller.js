import { Profile } from "../models/profile.models.js";

const createProfile = async (req, res) => {
    const { name, email, education, skills, projects, work, links } = req.body;
    try {
        const newProfile = new Profile({
            name,
            email,
            education,
            skills,
            projects,
            work,
            links
        });
        const savedProfile = await newProfile.save();
        res.status(201).json(savedProfile);
    }
    catch (error){
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

const getProfile = async (req, res) => {
    try{
        const profile = await Profile.findOne();
        res.status(200).json(profile);
    }
    catch(error){
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

const updateProfile = async (req, res) => {
    const { name, email, education, skills, projects, work, links } = req.body;
    try{
        const updatedProfile = await Profile.findOneAndUpdate({}, {
            name,
            email,
            education,
            skills,
            projects,
            work,
            links
        }, { new: true });
        res.status(200).json(updatedProfile);
    }
    catch(error){
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

export { createProfile, getProfile, updateProfile };