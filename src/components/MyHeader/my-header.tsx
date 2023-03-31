import React, { useState } from 'react';
import classes from './my-header.module.css';
import { MyInput } from '../MyInput/my-input';
import { useNavigate, useLocation } from 'react-router-dom';

export function MyHeader(props: { active: string }) {
  const [value, setValue] = useState(localStorage.getItem('search'));
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
        <img
          className={classes.img}
          src="iStar_Design_Thanksgiving_LineIcons_Live-47-512.webp"
        ></img>
        <h1 className={classes.logo_top}>BIGPIE</h1>
      </div>
      <MyInput
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) {
            localStorage.setItem('search', e.target.value);
            setValue(localStorage.getItem('search'));
          }
        }}
        placeholder="Search..."
        list="SearchInput"
      />
      <datalist id="SearchInput">
        <option id="tips">{value}</option>
      </datalist>
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
