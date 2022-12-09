import React from 'react';
import Button from './Button';

const Items = ({ items = [], title, featured}) => {
  const renderNumbers = featured ? 8 : items.length;

  const renderItems = items
    .splice(0, renderNumbers)
    .map((item) => (
      <div
        key={item.id}
        className="hover:bg-gray-100 transition duration-300 ease-in pb-5 group hover:shadow-md"
      >
        <img
          className="w-full h-52 border"
          src={item.img}
          alt={item.label}
        />
        <p className="text-xl  my-5">{item.label}</p>
        <div className="my-5">
          <p className="text-sm font-light">Start From</p>
          <p className="font-bold">{item.price} USD</p>
        </div>
        <Button
          primary
          link
          className="opacity-0 group-hover:opacity-100 uppercase font-semibold text-sm mx-auto"
          style={{display: 'inline'}}
          to={`/products/${item.id}`}
        >
          View details
        </Button>
      </div>
    ));

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="section-title">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5 text-center">
          {renderItems}
        </div>
      </div>
    </div>
  );
}

export default Items;
