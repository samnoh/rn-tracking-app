import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { JWT_SECRET_KEY } from '../utils/secret';

const User = mongoose.model('User');

export default (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, JWT_SECRET_KEY, async (err, payload) => {
        if (err) return res.status(401).send({ error: 'You must be logged in' });

        const { userId } = payload;

        const user = await User.findById(userId);
        req.user = user;
        next();
    });
};
