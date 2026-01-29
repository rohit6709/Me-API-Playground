import cors from 'cors';

const corsOptions = {
    origin: '*',
    methods: ['GET','POST','PUT'],
    credentials: true
};

export default cors(corsOptions);