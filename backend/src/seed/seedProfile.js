import dotenv from 'dotenv';
dotenv.config();

import connectDB from '../config/db.js';
import { Profile } from '../models/profile.models.js';

const seedProfile = async () => {
    try {
      await connectDB();
      await Profile.deleteMany();

        await Profile.create({
        name : "Rohit Dogra",
        email : "dograrohit954@gmail.com",
        education : "B.Tech CSE",
        skills: ["HTML","CSS","Javascript","Node.js","SQL","Mongodb","React","Java"],
        projects: [
            {
                title : "Interview Prep-X",
                description: "Interview Prep X helps you practice role-specific interview questions, deepen your answers, and organize your prep — all in one place.",
                skill: ["Node.js","Express.js","MongoDB","JavaScript","React"],
                links: ["https://interview-prep-x.vercel.app/", "https://github.com/rohit6709/Interview-PrepX"]
            },
            {
                title : "Car Rental Platform",
                description: "A car rental platform where users can book available cars or register their own cars for rental, with real-time availability and updates for a smooth booking experience.",
                skill: ["Node.js","Express.js","MongoDB","JavaScript","React"],
                links: ["https://car-rental-platform-seven.vercel.app/","https://github.com/rohit6709/Car-Rental-Platform"]
            },
            {
                title : "Lost and Found Portal",
                description: "A lost and found portal where users can register lost and found items and connect through a built-in chat feature to help reunite items with their owners.",
                skill: ["Node.js","Express.js","MongoDB","JavaScript","HTML","CSS"],
                links: ["https://lost-found-portal-n1pw.onrender.com/","https://github.com/rohit6709/Lost-Found_Portal"]
            },
            {
                title: "FotoLive",
                description: "FotoLive is a real-time photo platform where users can view new images, react and comment on them, and see all activity instantly reflected in a live feed for everyone.",
                skill: ["React","JavaScript","Unsplash API","InstantDb"],
                links: ["https://fotolive-realtime-gallery.vercel.app/","https://github.com/rohit6709/RealTime-Image-Gallery"]
            }
        ],
        work: [],
        links: {
            github : "https://github.com/rohit6709",
            linkedin : "https://www.linkedin.com/in/rohit-dogra2004/",
            portfolio : "https://rohitdogra-portfolio.vercel.app/"
        }
      });
      console.log("Profile Seeded Successfully");
      process.exit();
      
    } catch (error) {
        res.status(500).json({message : "Server Error", error: error.message});
    }
}

seedProfile();