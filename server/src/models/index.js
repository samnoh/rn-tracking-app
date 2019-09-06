import mongoose from 'mongoose';
import './User';

import { MONGO_URI } from '../utils/secret';

mongoose.connect(`mongodb://${MONGO_URI}:27017`, {
    dbName: 'node-server',
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', err => {
    console.log('Error connecting to mongo instance', err);
});
