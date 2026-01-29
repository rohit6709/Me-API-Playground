import cors from 'cors';

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET','POST','PUT'],
    credentials: true
};

export default cors(corsOptions);