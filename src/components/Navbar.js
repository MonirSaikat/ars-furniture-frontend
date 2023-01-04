import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useCart } from "../hooks/use-cart";
import Button from "./Button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { loggedIn } = useAuth();
  const { cartLength } = useCart();
  const [collapsed, setCollapsed] = useState(false);
  const menuRef = createRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setCollapsed(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/products",
      label: "Products",
    },
    {
      path: "/cart",
      label: (
        <div>
          <span>Cart</span>
          <sup className="w-10 h-10 bg-red-500 text-white p-1 rounded-full mb-2">
            {cartLength()}
          </sup>
        </div>
      ),
    },
  ];

  const renderLinks = links.map((link) => {
    return (
      <li key={link.path} className="mx-3 my-3 md:my-0">
        <Link to={link.path} href="#">
          {link.label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-gray-900 text-white py-5 px-3 shadow-md">
      <div className="container flex items-center w-full justify-between mx-auto">
        <Link to="/" className="">
          <h1 className="text-3xl font-bold">
            <span className="text-yellow-300">ARS</span>
            Furniture
          </h1>
          {/* <img
            className="w-28 scale-150"
            src="/images/logo.png"
            alt="Logo"
          /> */}
        </Link>

        <button
          aria-controls="Navbar toggler"
          className="text-2xl hover:text-gray-200 block md:hidden"
          onClick={() => setCollapsed(!collapsed)}
        >
          <AiOutlineMenu />
        </button>

        <ul
          ref={menuRef}
          className={`flex items-center flex-col md:flex-row absolute md:static bg-gray-900 z-20 w-full md:w-auto left-0 top-[70px] md:top-0 ${
            collapsed ? "opacity-100 h-auto" : "opacity-0"
          } md:opacity-100 py-5 duration-500`}
        >
          {renderLinks}
          <li className="ml-4">
            <Button link to={loggedIn ? "/dashboard" : "/login"} primary>
              {loggedIn ? "Dashboard" : "Login"}
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
