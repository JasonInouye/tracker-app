import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'https://f4c8-2601-449-4500-cca0-7577-a1d-94a6-922c.ngrok-free.app'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;

