import React from 'react';
import classes from './my-header.module.css';
import { MyInput } from '../MyInput/my-input';
import { useNavigate, useLocation } from 'react-router-dom';

export function MyHeader(props: {
  active: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  function pathCheck(e: React.MouseEvent<HTMLElement>) {
    if (location.pathname === '/posts') {
      if (e.currentTarget.id === 'about') {
        return navigate('/about');
      }
      if (e.currentTarget.id === 'orders') {
        return navigate('/orders');
      }
    }
    if (location.pathname === '/about') {
      if (e.currentTarget.id === 'posts') {
        return navigate('/posts');
      }
      if (e.currentTarget.id === 'orders') {
        return navigate('/orders');
      }
    }
    if (location.pathname === '/orders') {
      if (e.currentTarget.id === 'posts') {
        return navigate('/posts');
      }
      if (e.currentTarget.id === 'about') {
        return navigate('/about');
      }
    }
  }

  return (
    <header role="header" className={classes.header}>
      <div className={classes.logo_container}>
        <img className={classes.img} src="dba0b38b4f0e60bc904d5b5bf2799215.png"></img>
        <h1 className={classes.logo_top}>TLotR</h1>
      </div>
      <MyInput
        placeholder="Search..."
        list="SearchInput"
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            props.setSearch(e.currentTarget.value);
          }
        }}
      />
      <div className={classes.menu_container}>
        <h1
          id="posts"
          className={props.active === 'post' ? classes.active : classes.h1}
          onClick={pathCheck}
        >
          Posts Page
        </h1>
        <h1
          id="about"
          className={props.active === 'about' ? classes.active : classes.h1}
          onClick={pathCheck}
        >
          About Us
        </h1>
        <h1
          id="orders"
          className={props.active === 'orders' ? classes.active : classes.h1}
          onClick={pathCheck}
        >
          Orders
        </h1>
      </div>
    </header>
  );
}
