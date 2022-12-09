import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({ children, rounded, secondary, className, primary, danger, link = false, to, ...rest}) => {
  const classes = classNames(
    "px-4 py-2 hover:opacity-90 flex items-center justify-center transition",
    {
      "bg-yellow-400 text-gray-900": primary,
      "bg-gray-900 text-white": secondary,
      "bg-red-600 text-gray-100": danger,
      "rounded-md": rounded,
    },
    className
  );

  return link ? (
    <Link to={to} className={classes} {...rest}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
