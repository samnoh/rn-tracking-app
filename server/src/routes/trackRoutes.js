import { Router } from 'express';
import mongoose from 'mongoose';

import requireAuth from '../middlewares/requireAuth';

const Track = mongoose.model('Track');
const router = Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id }); // typeof tracks = []

    res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;

    if (!name || !locations)
        return res.status(422).send({ error: 'Name and locations must be provided' });

    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();

        res.send(track);
    } catch (e) {
        res.status(422).send({ error: e.message });
    }
});

router.delete('/tracks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Track.findByIdAndDelete(id);

        res.send({ success: id });
    } catch (e) {
        res.status(422).send({ error: e.message });
    }
});

export default router;
