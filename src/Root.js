import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Profil from './components/Profil';
import NotFound from './components/NotFound';
import Item from './components/Item';
import Cart from './components/Cart';
import ResetPassword from './components/ResetPassword';

const Root = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path='/reset/:token' element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root