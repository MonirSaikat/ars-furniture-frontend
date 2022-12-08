import React from 'react';
import classNames from 'classnames';

const Button = ({ children, rounded, secondary, className, primary, ...rest}) => {
  const classes = classNames(
    "px-4 py-2 hover:opacity-90 transition",
    className,
    {
      "bg-yellow-400 text-gray-900": primary,
      "bg-gray-900 text-white": secondary,
      "rounded-md": rounded,
    }
  );

  return <button className={classes} {...rest}>{children}</button>;
};

export default Button;
