import axios from 'axios';

const api = axios.create({
  baseURL: 'https://produtos.leoproti.com.br',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor para logging
api.interceptors.request.use(config => {
  console.log('Enviando requisição:', config);
  return config;
}, error => {
  console.error('Erro na requisição:', error);
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  console.log('Resposta recebida:', response);
  return response;
}, error => {
  console.error('Erro na resposta:', error.response?.data || error.message);
  return Promise.reject(error);
});

export default api;