import { handleError, handleSuccess } from '../utils';
import { api } from './api';

export const addNewProduct = async (data) => {
  try {
    const product = await api.post('/products', {...data}, true);
    handleSuccess('Product Added');
    return product;
  } catch (error) {
    handleError(error);
  }
};

export const getAllProducts = async () => {
  const products = await api.get('products');
  return products;
};

export const getProductById = async (id) => {
  return await api.get(`products/${id}`);
};

export const deleteProductById = async (id) => {
  try {
    await api.delete(`products/${id}`);
    handleSuccess('Product deleted');
  } catch (error) {
    handleError(error);
  }
};
