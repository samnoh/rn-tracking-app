import { Router } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../utils/secret';

const User = mongoose.model('User');

const router = Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY);
        res.send({ token });
    } catch (e) {
        console.error(e);
        return res.status(422).send('Invalid input');
    }
});

export default router;
