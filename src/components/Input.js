import React from 'react';
import classNames from 'classnames';

const Input = ({ className, textarea, ...rest }) => {
  const classes = classNames('py-2 w-full border-2 rounded-sm focus:border-yellow-400 px-4 outline-none', className);

  return textarea ? (
    <textarea className={classes} {...rest} />
  ) : (
    <input className={classes} {...rest} />
  );
};

export default Input;
