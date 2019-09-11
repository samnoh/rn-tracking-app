import axios from 'axios';
import { AsyncStorage } from 'react-native';

// Tracker
const instance = axios.create({
    baseURL: 'http://2ffb74bf.ngrok.io'
});

instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');

        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    e => Promise.reject(e)
);

export default instance;
