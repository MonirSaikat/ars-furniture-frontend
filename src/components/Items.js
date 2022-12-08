import React from 'react';
import Button from './Button';

const Items = ({ title, featured}) => {
  const items = [
    {
      label: "Item one",
      img: "images/img1.jpg",
      price: 10,
      rating: 5,
    },
    {
      label: "Item two",
      img: "images/img2.jpg",
      price: 15,
      rating: 5,
    },
    {
      label: "Item three",
      img: "images/img3.jpg",
      price: 100,
      rating: 3.9,
    },
    {
      label: "Item four",
      img: "images/img4.jpg",
      price: 20,
      rating: 4.5,
    },
    {
      label: "GG-398c",
      img: "images/img5.jpg",
      price: 90,
      rating: 4.9,
    },
    {
      label: "DD04-G",
      img: "images/img6.jpg",
      price: 40,
      rating: 4.9,
    },

    {
      label: "GG-99-99",
      img: "images/img7.jpg",
      price: 40,
      rating: 4.9,
    },
  ];

  const renderNumbers = featured ? 8 : items.length;

  const renderItems = items
    .splice(0, renderNumbers)
    .map((item) => (
      <div
        key={item.img}
        className="hover:bg-gray-100 transition duration-300 ease-in pb-5 group"
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
          className="opacity-0 group-hover:opacity-100 uppercase font-semibold text-sm mx-auto"
          primary
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
