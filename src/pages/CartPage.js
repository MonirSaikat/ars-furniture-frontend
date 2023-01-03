import React, { useState } from 'react';
import { useCart } from '../hooks/use-cart';
import Button from '../components/Button';
import CartSubtotal from '../components/CartSubtotal';

const CartItem = ({ cart }) => {
  const { removeFromCart, getItem, updateCart } = useCart();
  const {label, imageUrl} = cart;
  const [quantity, setQuantity] = useState(() => {
    return getItem(cart).quantity;
  });

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setQuantity(value);
  }

  const handleRemove = (cart) => {
    removeFromCart(cart);
  };

  const handleUpdateCart = () => {
    updateCart({...cart, quantity});
  };

  return(
    <div className="p-3 flex justify-between mb-3 border-b">
      <div className='flex'>
        <img src={imageUrl} alt={label} className="h-28 w-40" />
        <div className='ml-2'>
          <h2 className='text-2xl mb-2'>{label}</h2>
          <div className="flex">
            <input
              type="number"
              className='border-2 p-1'
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button sm primary onClick={handleUpdateCart}>Update</Button>
            <Button
              sm
              danger
              onClick={() => handleRemove(cart)}
            >Remove</Button>
          </div>
        </div>
      </div>
      <div>
        ${cart.price}
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cartState, subtotalPrice } = useCart();

  const renderCartItems = cartState.map(cart => {
    return <CartItem key={cart._id} cart={cart} />
  });

  const noItemsInCart = (
    <div className='py-4'>
      <p className="text-2xl text-center text-gray-600">No items in cart</p>
    </div>
  );

  const renderFooter = (
    <footer className='flex justify-end'>
      <p className='text-xl'>Subtotal ({cartState.length} items):   ${subtotalPrice}</p>
    </footer>
  );

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="shadow-lg p-3 col-span-3">
          <header className='flex justify-between mb-3 border-b pb-3'>
            <p className="text-3xl">Shopping Cart</p>
            <p className='text-2xl font-light'>Price</p>
          </header>
          {cartState.length > 0 ? renderCartItems : noItemsInCart}
          {renderFooter}
        </div>
        <CartSubtotal />
      </div>
    </div>
  );
}

export default CartPage;
