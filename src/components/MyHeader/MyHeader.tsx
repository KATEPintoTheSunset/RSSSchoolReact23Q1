import React from 'react'
import classes from './MyHeader.module.css'
import { useNavigate, useLocation } from 'react-router-dom';

export function MyHeader() {
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
    <header className={classes.header}>
        <h1 id='posts' onClick={ checkingAbout }>Posts Page</h1>
        <h1 id='about' onClick={ checkingPosts }>About Us</h1>
    </header>)
}