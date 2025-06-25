import api from './api';

export const getProdutos = () => api.get('/');
export const getProdutoById = (id) => api.get(`/${id}`);
export const createProduto = (produto) => api.post('/', produto);
export const updateProduto = (id, produto) => api.put(`/${id}`, produto);
export const deleteProduto = (id) => api.delete(`/${id}`);
