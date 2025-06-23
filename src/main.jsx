import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/Home';
import ProdutoForm from './pages/ProdutoForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/novo" element={<ProdutoForm />} />
        <Route path="/editar/:id" element={<ProdutoForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);