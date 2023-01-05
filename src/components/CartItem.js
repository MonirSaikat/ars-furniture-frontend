import { useState } from "react";
import { useCart } from "../hooks/use-cart";
import Button from "./Button";
import { moneyFormat } from '../utils/helper';

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
    <div className="p-3 flex flex-col md:flex-row justify-between mb-3 border-b">
      <div className="flex flex-col md:flex-row">
        <img src={imageUrl} alt={label} className="h-28 w-40" />
        <div className="ml-0 md:ml-2">
          <h2 className="text-2xl mb-2">{label}</h2>
          <div className="flex flex-col md:flex-row my-2 md:my-0">
            <input
              type="number"
              className="border-2 p-1 mb-2 md:mb-0"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <div className='flex'>
              <Button sm primary onClick={handleUpdateCart}>
                Update
              </Button>
              <Button sm danger onClick={() => handleRemove(cart)}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="md:hidden">Price : </span>
        ${moneyFormat(cart.price)}
      </div>
    </div>
  );
};

export default CartItem;
