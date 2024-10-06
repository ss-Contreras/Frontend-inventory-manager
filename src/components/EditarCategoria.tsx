'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCategoriaById, updateCategoria } from '../services/categoriaService';
import { Categoria } from '../types/categoria';

interface EditarCategoriaFormProps {
  categoriaId: number;
}

const EditarCategoriaForm: React.FC<EditarCategoriaFormProps> = ({ categoriaId }) => {
  const router = useRouter();
  const [nombre, setNombre] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');

  useEffect(() => {
    cargarCategoria();
  }, [categoriaId]);

  const cargarCategoria = async () => {
    try {
      const categoria = await getCategoriaById(categoriaId);
      setNombre(categoria.nombre);
      setDescripcion(categoria.descripcion);
    } catch (error) {
      console.error('Error al cargar la categoría:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateCategoria(categoriaId, { categoriaID: categoriaId, nombre, descripcion });
      router.push('/categorias'); // Redirige al listado de categorías después de actualizar
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Editar Categoría</h1>
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
        Actualizar Categoría
      </button>
    </form>
  );
};

export default EditarCategoriaForm;
