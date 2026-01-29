import { Profile } from "../models/profile.models.js";

const getTopSkills = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        const skills = profile.skills;
        // const topSkills = skills.slice(0, 5);
        res.status(200).json(profile ? skills : []);
    } catch (error) {
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

export { getTopSkills };