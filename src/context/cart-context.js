import { createContext } from 'react';
import { useLocalStorage } from '../hooks/use-localstorage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart');

  const addToCart = (product) => {
    const updatedCart = cart ? [...cart, product] : [product];
    setCart(updatedCart);
  };

  const removeFromCart = () => {};

  const cartLength = () => {
    return typeof !cart ? 0 : cart.length;
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

