import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../../components/Button";
import Input from '../../components/Input';
import { getProductById } from '../../services/product-service';
import { handleError } from '../../utils';
import Loader from '../../components/Loader';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [fetching, setFetching] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setFetching(true);
    getProductById(id)
      .then((product) => {
        setProduct(product);
        setFetching(false);
      })
      .catch((error) => {
        setFetching(false);
        handleError(error);
      });
  }, [id]);

  if(fetching) return <Loader />;

  if(product === null) return null;


  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src={product.imageUrl}
            alt="Product"
            className="w-full object-contain"
          />
        </div>
        <div className="p-4 pt-0 text-gray-500">
          <h2 className="text-3xl">{product.label}</h2>
          <div className="my-3">
            <p className="text-sm font-light mb-2">
              Unit price: {product.price}usd
            </p>
            <p className="text-sm font-light mb-2">
              Quntity: 1
            </p>
            <p className="text-sm font-light mb-2">
              Color: N/A
            </p>
          </div>

          <div className="grid grid-cols-5">
            <Input
              type="number"
              min="1"
              placeholder="Quantity"
              className="inline"
            />
            <Button primary>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;