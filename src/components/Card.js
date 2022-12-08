import classNames from 'classnames';
import React from 'react';

const Card = ({ children, className }) => {
  const classes = classNames(
    "bg-gray-50 border p-5 shadow-md",
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Card;
