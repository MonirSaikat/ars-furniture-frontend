import React, { useState } from 'react';
import { useCart } from '../hooks/use-cart';
import Button from '../components/Button';

const CartItem = ({ cart }) => {
  const { removeFromCart, getItem, addToCart } = useCart();
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

  const updateCart = () => {
    addToCart({...cart, quantity});
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
              className='border-2'
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button sm primary onClick={updateCart}>Update</Button>
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
  const { cartState } = useCart();
  const subtotalPrice = cartState.reduce((prevValue, currCart) => {
    return prevValue + (currCart.price * currCart.quantity)
  }, 0);

  const renderCartItems = cartState.map(cart => {
    return <CartItem key={cart._id} cart={cart} />
  });

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
          {renderCartItems}
          {renderFooter}
        </div>
        <div className='shadow-lg p-3 self-start'>
          <p className='text-xl mb-2'>Subtotal ({cartState.length} items): $<strong>{subtotalPrice}</strong></p>
          <Button primary rounded className='w-full font-light'>Proceed to buy</Button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
