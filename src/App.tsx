import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Component1 } from './components/Component1';
import './main.global.css';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from './pages/Page404';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

function AppComponent() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export const App = hot(() => <AppComponent />);
