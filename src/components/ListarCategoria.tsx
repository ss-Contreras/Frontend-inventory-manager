'use client'

// src/components/ListarCategorias.tsx
import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/categoriaService';
import { Categoria } from '../types/categoria';

const ListarCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {
      const data = await getCategorias();
      console.log('Datos recibidos:', data);
      setCategorias(data);
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Categorías</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Descripción</th>
            <th className="py-3 px-6 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {categorias.length > 0 ? (
            categorias.map((categoria) => (
              <tr key={categoria.categoriaID} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{categoria.categoriaID}</td>
                <td className="py-3 px-6 text-left">{categoria.nombre}</td>
                <td className="py-3 px-6 text-left">{categoria.descripcion || 'N/A'}</td>
                <td className="py-3 px-6 text-center">
                  <a href={`/categorias/${categoria.categoriaID}`} className="text-blue-500 hover:underline mr-4">
                    Editar
                  </a>
                  <button
                    onClick={() => console.log('Eliminar', categoria.categoriaID)}
                    className="text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No hay categorías disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarCategorias;
