import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-5 px-3">
      <div className="container flex items-center w-full justify-between mx-auto">
        <a
          href="#"
          className="w-20 overflow-hidden rounded-full flex items-center justify-center"
        >
          <img
            className="w-28 scale-150"
            src="./images/logo.png"
            alt="Logo"
          />
        </a>

        <ul className="flex items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="ml-4">
            <a href="#">Products</a>
          </li>
          <li className="ml-4">
            <Button primary rounded>
              Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
