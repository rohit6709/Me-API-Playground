import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    skill: {
        type: [String],
        required: true
    },
    links: [String],
})

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    education:{
        type: String,
        required: true
    },
    skills:[String],
    projects: [projectSchema],
    work: [String],
    links: {
        github:{
            type: String,
        },
        linkedin:{
            type: String,
        },
        portfolio:{
            type: String,
        }
    }
})

export const Profile = mongoose.model('Profile',profileSchema);