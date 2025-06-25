import api from './api';

export const getProdutos = () => api.get('/produtos');
export const getProdutoById = (id) => api.get(`/produtos/${id}`);
export const createProduto = (produto) => api.post('/produtos', produto);
export const updateProduto = (id, produto) => api.put(`/produtos/${id}`, produto);
export const deleteProduto = (id) => api.delete(`/produtos/${id}`);