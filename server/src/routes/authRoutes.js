import { Router } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../utils/secret';

const router = Router();
const User = mongoose.model('User');

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

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(422).send({ error: 'Email and password must be provided' });

    const user = await User.findOne({ email });
    if (!user) return res.status(422).send({ error: 'Invalid password or email' });

    try {
        await user.comparePassword(password);

        const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY);
        res.send({ token });
    } catch (e) {
        res.status(422).send({ error: 'Invalid password or email' });
    }
});

export default router;
