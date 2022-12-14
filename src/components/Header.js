import React from "react";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="bg-header md:h-96 py-14 sm:h-full bg-center bg-cover bg-blend-overlay">
      <div className="container mx-auto text-white flex items-center h-full px-5 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">Order your dream decor now</h1>
          <p className="my-4 text-sm text-gray-100 font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            eveniet nesciunt labore laborum porro fuga. Ab iste aperiam odit
            officia harum aspernatur mollitia possimus alias, ex exercitationem
            saepe, minima excepturi?
          </p>
          <div className="flex translate-x-0.5 justify-center">
            <Button primary className="mt-5 mr-2" link to="/products">
              Explore
            </Button>
            <Button primary className="mt-5" success link to="/login">
              Order now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
