import { createContext, useState, useEffect } from "react";
import {
  addNewProduct,
  deleteProductById,
  getAllProducts,
} from "../services/product-service";
import { useAuth } from "../hooks/use-auth";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchProducts = () => {
    getAllProducts().then((prodArr) => {
      setProducts(prodArr);
      setFetching(false);
    });
  };

  useEffect(() => {
    setFetching(true);
    fetchProducts();
  }, []);

  const addProduct = (product) => {
    addNewProduct(product, token).then((product) => {
      setProducts((prevProducts) => [...prevProducts, product]);
    });
  };

  const deleteProduct = (id) => {
    deleteProductById(id, token).then(() => {
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
    });
  };

  const data = {
    products,
    fetching,
    addProduct,
    fetchProducts,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductsProvider;
