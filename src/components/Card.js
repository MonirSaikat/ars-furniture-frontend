import classNames from 'classnames';
import React from 'react';

const Card = ({ children, className, border }) => {
  const classes = classNames(
    "p-5 shadow-lg",
    {
      "border": border
    },
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Card;
