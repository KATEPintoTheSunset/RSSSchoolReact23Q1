import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './Pages/error404';
import { AboutUs } from './Pages/AboutUs/about-us';
import { PostsPage } from './Pages/PostsPage/post-page';

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
