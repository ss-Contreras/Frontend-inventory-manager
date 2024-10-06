'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createCategoria } from '../services/categoriaService';

const CrearCategoriaForm: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCategoria({ nombre, descripcion });
      router.push('/categorias'); // Redireccionar después de crear la categoría
    } catch (error) {
      console.error('Error al crear la categoría:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Crear Nueva Categoría</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="block border border-gray-300 p-2 mb-4 w-full rounded"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="block border border-gray-300 p-2 mb-4 w-full rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Crear Categoría
      </button>
    </form>
  );
};

export default CrearCategoriaForm;
