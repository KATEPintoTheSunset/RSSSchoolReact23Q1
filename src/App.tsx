import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './Pages/Error404';
import { AboutUs } from './Pages/AboutUs';
import { PostsPage } from './Pages/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/posts'}></Navigate>}></Route>
        <Route path="/posts" element={<PostsPage></PostsPage>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/404" element={<Error404></Error404>}></Route>
        <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
