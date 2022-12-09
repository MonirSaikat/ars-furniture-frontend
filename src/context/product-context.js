import { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductsProvider = ({ cihldren }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={products}>
      {cihldren}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
