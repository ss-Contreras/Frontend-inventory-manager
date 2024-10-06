'use client'

import React from 'react';
import EditarCategoriaForm from '../../../components/EditarCategoria';
import { useParams } from 'next/navigation';

const EditarCategoriaPage = () => {
  const params = useParams();
  const categoriaId = parseInt(params.categoriaId as string, 10);

  if (isNaN(categoriaId)) {
    return <p>Error: ID de categoría inválido</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <EditarCategoriaForm categoriaId={categoriaId} />
    </div>
  );
};

export default EditarCategoriaPage;
