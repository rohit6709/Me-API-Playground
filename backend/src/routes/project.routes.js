import express  from 'express';
import { Router } from 'express';
import { getProjectsBySkill } from '../controllers/project.controller.js';

const router = Router();

router.get('/', getProjectsBySkill);

export default router;