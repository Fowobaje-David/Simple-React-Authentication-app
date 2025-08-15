import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:8080/api',
    headers: {
        'content-type': "application/json",
    }
});

export default api;