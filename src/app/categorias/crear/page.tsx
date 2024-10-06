'use client'
// src/app/categorias/crear/page.tsx
import React from 'react';
import CrearCategoriaForm from '../../../components/CrearCategoria';

const CrearCategoriaPage = () => {
  return (
    <div className="container mx-auto p-4">
      <CrearCategoriaForm />
    </div>
  );
};

export default CrearCategoriaPage;
