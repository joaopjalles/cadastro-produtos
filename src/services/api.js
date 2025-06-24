import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apipw.leoproti.com.br'
});

export default api;