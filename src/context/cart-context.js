import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [cart, setCart] = useLocalStorage('cart');

  useEffect(() => setCartState(cart ? cart : []), []);

  const addToCart = (product) => {
    const alreadyInCart = cartState.find(p => p._id === product._id);
    if(alreadyInCart) {
      const updated = cartState.map(c => {
        if (c._id === product._id) {
          c.quantity += product.quantity;
        }
        return c;
      });
      setCartState(updated);
    } else {
      setCartState([...cartState, product]);
    }
    setCart(cartState);
  };

  const removeFromCart = (product) => {
    const updated = cartState.filter(c => c._id !== product._id);
    setCartState(updated);
    setCart(cartState);
  };

  const cartLength = () => {
    return cartState.length;
  };

  const inCart = (product) => {
    return cartState.some(p => p._id === product._id);
  };

  const data = {
    addToCart,
    removeFromCart,
    inCart,
    cartLength
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

