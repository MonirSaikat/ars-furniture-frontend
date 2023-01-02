import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [cart, setCart] = useLocalStorage('cart');

  useEffect(() => setCartState(cart), []);

  const addToCart = (product) => {
    const updatedCart = cart ? [...cart, product] : [product];
    setCart(updatedCart);
  };

  const removeFromCart = () => {};

  const cartLength = () => {
    return cartState.length;
  };

  const data = {
    addToCart,
    removeFromCart,
    cartLength
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

