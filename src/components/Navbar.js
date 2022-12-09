import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import Button from './Button';

const Navbar = () => {
  const { loggedIn } = useAuth();

  const links = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/products',
    label: 'Products'
  }];

  const renderLinks = links.map((link) => {
    return (
      <li key={link.path} className='mx-3'>
        <Link to={link.path} href="#">
          {link.label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-gray-900 text-white py-5 px-3">
      <div className="container flex items-center w-full justify-between mx-auto">
        <Link
          to="/"
          className="w-20 overflow-hidden rounded-full flex items-center justify-center"
        >
          <img
            className="w-28 scale-150"
            src="/images/logo.png"
            alt="Logo"
          />
        </Link>

        <ul className="flex items-center">
          {renderLinks}
          <li className="ml-4">
            <Button link to={ loggedIn ? "/dashboard" : "/login"} primary rounded>
              {loggedIn ? 'Dashboard' : 'Login'}
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
