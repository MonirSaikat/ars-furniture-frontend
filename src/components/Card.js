import classNames from 'classnames';
import React from 'react';

const Card = ({ children, className }) => {
  const classes = classNames(
    "border p-5 shadow-lg",
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Card;
