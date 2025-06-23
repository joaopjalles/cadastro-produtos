import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getProdutos, deleteProduto } from '../services/produtoService';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  const fetchProdutos = async () => {
    const res = await getProdutos();
    setProdutos(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProduto(id);
    fetchProdutos();
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Produtos</Typography>
      <Button variant="contained" onClick={() => navigate('/novo')} sx={{ mb: 2 }}>Novo Produto</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map(prod => (
            <TableRow key={prod.id}>
              <TableCell>{prod.id}</TableCell>
              <TableCell>{prod.nome}</TableCell>
              <TableCell>R$ {Number(prod.preco).toFixed(2)}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/editar/${prod.id}`)}>Editar</Button>
                <Button color="error" onClick={() => handleDelete(prod.id)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}