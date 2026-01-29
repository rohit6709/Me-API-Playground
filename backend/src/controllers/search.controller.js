import { Profile } from "../models/profile.models.js";

const searchProfile = async (req, res) => {
    const { query } = req.query;
    try {
        if(!query){
            return res.status(400).json({message: "Query parameter is required"});
        }
        
        const profile = await Profile.findOne();
        if(!profile){
            return res.status(404).json({ skills: [], projects: [] });
        }

        const matchSkills = profile.skills.filter(skill => 
            skill.toLowerCase().includes(query.toLowerCase())
        )
        const matchProjects = profile.projects.filter(project => 
            project.title.toLowerCase().includes(query.toLowerCase()) ||
            project.description.toLowerCase().includes(query.toLowerCase()) || 
            project.skill.some(s => s.toLowerCase().includes(query.toLowerCase()))
        );
        res.status(200).json({
            skills: matchSkills,
            projects: matchProjects
        })
    } catch (error) {
        res.status(500).json({message : "Search failed", error: error.message});
    }
}

export { searchProfile };