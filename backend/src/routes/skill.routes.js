import { Router } from 'express';
import { getTopSkills } from '../controllers/skill.controller.js';
import { get } from 'mongoose';

const router = Router();

router.get('/top', getTopSkills);

export default router;