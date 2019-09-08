import express from 'express';
import morgan from 'morgan';

import './models';
import { PORT } from './utils/secret';

import authRoutes from './routes/authRoutes';
import trackRoutes from './routes/trackRoutes';
import requireAuth from './middlewares/requireAuth';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', requireAuth, (req, res) => {
    res.send(req.user.email);
});

app.use(authRoutes);
app.use(trackRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
