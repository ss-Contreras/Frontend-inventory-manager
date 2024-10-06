// src/services/categoriaService.ts
import axios from 'axios';
import { Categoria } from '../types/categoria';

const API_URL = 'https://localhost:7069/api/categorias';

export const getCategorias = async (): Promise<Categoria[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    return [];
  }
};

export const getCategoriaById = async (id: number): Promise<Categoria> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createCategoria = async (categoria: Omit<Categoria, 'categoriaID'>): Promise<void> => {
  await axios.post(API_URL, categoria);
};

export const updateCategoria = async (id: number, categoria: Categoria): Promise<void> => {
  await axios.patch(`${API_URL}/${id}`, categoria);
};

export const deleteCategoria = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
