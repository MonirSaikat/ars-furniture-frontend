import { useState } from "react";
import { useCart } from "../hooks/use-cart";
import Button from "./Button";

const CartItem = ({ cart }) => {
  const { removeFromCart, getItem, updateCart } = useCart();
  const { label, imageUrl } = cart;
  const [quantity, setQuantity] = useState(() => {
    return getItem(cart).quantity;
  });

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);
  };

  const handleRemove = (cart) => {
    removeFromCart(cart);
  };

  const handleUpdateCart = () => {
    updateCart({ ...cart, quantity });
  };

  return (
    <div className="p-3 flex justify-between mb-3 border-b">
      <div className="flex">
        <img src={imageUrl} alt={label} className="h-28 w-40" />
        <div className="ml-2">
          <h2 className="text-2xl mb-2">{label}</h2>
          <div className="flex">
            <input
              type="number"
              className="border-2 p-1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button sm primary onClick={handleUpdateCart}>
              Update
            </Button>
            <Button sm danger onClick={() => handleRemove(cart)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div>${cart.price}</div>
    </div>
  );
};

export default CartItem;
