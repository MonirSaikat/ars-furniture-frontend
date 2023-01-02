import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart');

  useEffect(() => {
    console.log(cart);
  }, []);

  const addToCart = () => {};
  const removeFromCart = () => {};

  const data = {
    addToCart,
    removeFromCart
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

