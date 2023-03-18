import React, { useState }from 'react'
import classes from './MyHeader.module.css'
import { MyInput } from '../../components/MyInput/MyInput'
import { useNavigate, useLocation } from 'react-router-dom';

export function MyHeader(props:any) {
    const [value, setValue] = useState(localStorage.getItem('search'))
    const navigate = useNavigate();
    const location = useLocation();
    function checkingPosts() {
        if(location.pathname === '/posts'){
            navigate('/about');
        }
    }
    function checkingAbout() {
        if(location.pathname === '/about'){
            navigate('/posts');
        };
    }

    return (
    <header role="header" className={classes.header}>
        <div  className={classes.logo_container}>
            <img className={classes.img} src='iStar_Design_Thanksgiving_LineIcons_Live-47-512.webp'></img>
            <h1 className={classes.logo_top}>BIGPIE</h1>
        </div>
        <MyInput 
        onBlur={(e:any) => {
          if (e.target.value) {
            localStorage.setItem('search', e.target.value);
            setValue(localStorage.getItem('search'))
          }
        }}
        placeholder="Search..."
        list="SearchInput"
        />
      <datalist id="SearchInput">
        <option id='tips'>{value}</option>
      </datalist>
      <div className={classes.menu_container}>
        <h1 id='posts' className={props.active === 'post'? classes.active : classes.h1} onClick={ checkingAbout }>Posts Page</h1>
        <h1 id='about' className={props.active === 'about'? classes.active : classes.h1} onClick={ checkingPosts }>About Us</h1>
      </div>
        
    </header>)
}