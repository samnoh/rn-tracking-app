import express from 'express';
import morgan from 'morgan';

import { PORT } from './utils/secret';
import './models';

import authRoutes from './routes/authRoutes';
import requireAuth from './middlewares/requireAuth';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', requireAuth, (req, res) => {
    res.send(req.user.email);
});

app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
