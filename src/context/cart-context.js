import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-localstorage";
import { handleSuccess } from "../utils";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [cart, setCart] = useLocalStorage("cart");

  useEffect(() => setCartState(cart ? cart : []), []);

  const addToCart = (product) => {
    const alreadyInCart = cartState.find((p) => p._id === product._id);
    if (alreadyInCart) {
      const updated = cartState.map((c) => {
        if (c._id === product._id) {
          c.quantity += product.quantity;
        }
        return c;
      });
      setCartState(updated);
    } else {
      setCartState([...cartState, product]);
    }
    handleSuccess("Added to cart");
    setCart(cartState);
  };

  const updateCart = (productOrCartItem) => {
    const insideCart = cartState.find((p) => p._id === productOrCartItem._id);
    if (insideCart) {
      const updated = cartState.map((c) => {
        if (c._id === productOrCartItem._id) {
          c.quantity = productOrCartItem.quantity;
        }
        return c;
      });
      setCartState(updated);
    }
    handleSuccess("Updated quantity");
    setCart(cartState);
  };

  const removeFromCart = (product) => {
    const updated = cartState.filter((c) => c._id !== product._id);
    setCartState(updated);
    handleSuccess("Removed from cart");
    setCart(updated);
  };

  const cartLength = () => {
    return cartState.length;
  };

  const inCart = (product) => {
    return cartState.some((p) => p._id === product._id);
  };

  const getItem = (product) => {
    return cartState.find((c) => c._id === product._id);
  };

  const subtotalPrice = cartState.reduce((prevValue, currCart) => {
    return prevValue + currCart.price * currCart.quantity;
  }, 0);

  const data = {
    addToCart,
    updateCart,
    removeFromCart,
    inCart,
    cartLength,
    cartState,
    getItem,
    subtotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
