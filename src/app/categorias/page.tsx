// src/app/categorias/page.tsx
import React from 'react';
import ListarCategorias from '../../components/ListarCategoria';

const CategoriasPage = () => {
  return (
    <div className="container mx-auto p-4">
      <ListarCategorias />
    </div>
  );
};

export default CategoriasPage;
