import React from "react";
import { useCart } from "../hooks/use-cart";
import CartSubtotal from "../components/CartSubtotal";
import CartItem from "../components/CartItem";
import { moneyFormat } from '../utils/helper';

const CartPage = () => {
  const { cartState, subtotalPrice } = useCart();

  const renderCartItems = cartState.map((cart) => {
    return <CartItem key={cart._id} cart={cart} />;
  });

  const noItemsInCart = (
    <div className="py-4">
      <p className="text-2xl text-center text-gray-600">No items in cart</p>
    </div>
  );

  const renderFooter = (
    <footer className="flex justify-end">
      <p className="text-xl">
        Subtotal ({cartState.length} items): ${moneyFormat(subtotalPrice)}
      </p>
    </footer>
  );

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-4">
        <div className="shadow-lg p-3 col-span-3">
          <header className="flex justify-between mb-3 border-b pb-3">
            <p className="text-3xl">Shopping Cart</p>
            <p className="text-2xl font-light hidden md:block">Price</p>
          </header>
          {cartState.length > 0 ? renderCartItems : noItemsInCart}
          {renderFooter}
        </div>
        <CartSubtotal />
      </div>
    </div>
  );
};

export default CartPage;
