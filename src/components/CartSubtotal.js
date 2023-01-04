import { useCart } from "../hooks/use-cart";
import Button from "./Button";

const CartSubtotal = () => {
  const { cartState, subtotalPrice } = useCart();

  return (
    <div className="shadow-lg p-3 self-start">
      <p className="text-xl mb-2">
        Subtotal ({cartState.length} items): $<strong>{subtotalPrice}</strong>
      </p>
      <Button primary link rounded className="w-full font-light" to="/checkout">
        Proceed to buy
      </Button>
    </div>
  );
};

export default CartSubtotal;
