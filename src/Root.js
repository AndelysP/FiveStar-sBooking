import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Profil from './components/Profil';
import NotFound from './components/NotFound';

const Root = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }

export default Root