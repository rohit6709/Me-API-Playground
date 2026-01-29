import { Router } from "express";
import { searchProfile } from "../controllers/search.controller.js";

const router = Router();

router.get('/', searchProfile);

export default router;