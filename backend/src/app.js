import express from 'express';
import cors from './config/cors.js';
import healthRoute from './routes/health.routes.js';
import profileRoute from './routes/profile.routes.js';
import projectRoute from './routes/project.routes.js';
import skillRoute from './routes/skill.routes.js';
import searchRoute from './routes/search.routes.js';

const app = express();

app.use(cors);
app.use(express.json());

app.use('/health', healthRoute);
app.use('/profile', profileRoute);
app.use('/project', projectRoute);
app.use('/skill', skillRoute);
app.use('/search', searchRoute);

export default app;