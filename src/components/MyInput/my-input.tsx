import React from 'react';
import classes from './my-input.module.css';

export function MyInput(props: {
  // onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  list: string;
}) {
  return <input className={classes.input} {...props}></input>;
}
