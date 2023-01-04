import { handleError, handleSuccess } from '../utils';
import { api } from './api';

export const addNewProduct = async (data, token) => {
  try {
    const product = await api.
      post('/products', {...data}, token);

    handleSuccess('Product Added');
    return product;
  } catch (error) {
    handleError(error);
  }
};

export const getAllProducts = async () => {
  const products = await api.get('products', token);
  return products;
};

export const getProductById = async (id) => {
  return await api.get(`products/${id}`);
};

export const deleteProductById = async (id, token) => {
  try {
    await api.delete(`products/${id}`, token);
    handleSuccess('Product deleted');
  } catch (error) {
    handleError(error);
  }
};
