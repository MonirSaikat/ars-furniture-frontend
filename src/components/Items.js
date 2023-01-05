import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/product-service";
import Button from "./Button";
import { handleError } from "../utils";
import { useCart } from "../hooks/use-cart";
import Loader from './Loader';

const RenderItems = ({ products, renderNumbers }) => {
  const { addToCart } = useCart();

  return products.map((product) => {
    return (
      <div
        key={product._id}
        className="hover:bg-gray-100 transition duration-300 ease-in pb-5 group hover:shadow-md border"
      >
        <img
          className="w-full h-52"
          src={product.imageUrl}
          alt={product.label}
        />
        <p className="text-xl  my-5">{product.label}</p>
        <div className="my-5">
          <p className="text-sm font-light">Start From</p>
          <p className="font-bold">{product.price} USD</p>
        </div>
        <div className="inline-flex justify-center">
          <Button
            primary
            link
            sm
            className="uppercase"
            to={`/products/${product._id}`}
          >
            View details
          </Button>
          <Button
            success
            sm
            className="uppercase"
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            add to cart
          </Button>
        </div>
      </div>
    );
  });
};

const Items = ({ title, featured }) => {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [renderNumbers, setRenderNumbers] = useState(1);

  useEffect(() => {
    setFetching(true);
    getAllProducts()
      .then((prodArr) => {
        setProducts(prodArr);
        setRenderNumbers(() => (featured ? 1 : prodArr.length));
        setFetching(false);
      })
      .catch((error) => {
        handleError(error);
        setFetching(false);
      });
  }, []);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="section-title">{title}</h2>
        {
          fetching ?
            <Loader /> : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5 text-center">
                <RenderItems products={products} renderNumbers={renderNumbers} />
              </div>)
        }
      </div>
    </div>
  );
};

export default Items;
