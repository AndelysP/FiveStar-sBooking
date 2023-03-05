import React from 'react';
import '../assets/sass/item.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const Item = () => {

  return (
    <div>
      <Navbar/>
      test Item
      <Footer />
    </div>
  )
}

export default Item