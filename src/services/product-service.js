import { handleError, handleSuccess } from '../utils';
import { adminData } from './adminData';

export const addNewProduct = async (data) => {
  try {
    const product = await adminData("post", "products", { ...data });
    handleSuccess('Product Added');
    return product;
  } catch (error) {
    handleError(error);
  }
};

export const getAllProducts = async () => {
  const products = await adminData('get', 'products');
  return products;
};

export const getProductById = async (id) => {
  const product = await adminData('get', `products/${id}`);
  return product;
};

export const deleteProductById = async (id) => {
  try {
    await adminData("delete", `products/${id}`);
    handleSuccess('Product deleted');
  } catch (error) {
    handleError(error);
  }
};
