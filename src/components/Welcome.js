import React from 'react';
import '../assets/sass/welcome.scss';
import Navbar from '../components/Navbar';

const Welcome = () => {
  return (
  <div>
  <Navbar/>

  <video autoplay loop muted class="welcome-video">
      <source data-src="src/assets/videos/earth.mp4" type="video/mp4" />
  </video>
    
  
  </div>
  )
}

export default Welcome