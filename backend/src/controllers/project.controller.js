import { Profile } from "../models/profile.models.js";

const getProjectsBySkill = async (req, res) => {
    const { skill } = req.query;
    try{
        if(!skill){
            return res.status(400).json({message: "Skill query parameter is required"});
        }
        const profile = await Profile.findOne();
        if(!profile){
            return res.status(404).json({message: "Profile not found"});
        }
        const filteredProjects = profile.projects.filter(project => 
            project.skill.map(s => s.toLowerCase()).includes(skill.toLowerCase())
        );
        const projects = filteredProjects.map(project => ({
            title: project.title,
            description: project.description,
            skill: project.skill,
            links: project.links
        })
        )
        res.status(200).json( profile ? projects : [] );
    }
    catch(error){
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

export { getProjectsBySkill}