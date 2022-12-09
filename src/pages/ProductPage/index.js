import React, { useEffect, useState } from "react";
import Items from "../../components/Items";
import { getAllProducts } from '../../services/product-service';
import { handleError } from '../../utils';
import Loader from '../../components/Loader';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getAllProducts()
      .then(products => {
        setProducts(products);
        setFetching(false);
      })
      .catch(error => {
        handleError(error);
        setFetching(false);
      })
  }, []);

  return (
    <div>
      <Items items={products} title="Products" />
      {fetching && <Loader />}
    </div>
  );
  };

export default ProductsPage;
