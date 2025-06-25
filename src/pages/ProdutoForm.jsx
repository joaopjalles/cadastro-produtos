import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduto, getProdutoById, updateProduto } from '../services/produtoService';

export default function ProdutoForm() {
  const [produto, setProduto] = useState({ nome: '', preco: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProdutoById(id).then(res => setProduto(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const produtoCorrigido = {
    ...produto,
    preco: parseFloat(produto.preco) // converte para número
  };

  try {
    if (id) {
      await updateProduto(id, produtoCorrigido);
    } else {
      await createProduto(produtoCorrigido);
    }
    navigate('/');
  } catch (error) {
    console.error("Erro ao salvar produto:", error);
  }
};

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{id ? 'Editar Produto' : 'Novo Produto'}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Preço"
          name="preco"
          value={produto.preco}
          onChange={handleChange}
          type="number"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">Salvar</Button>
      </form>
    </Container>
  );
}