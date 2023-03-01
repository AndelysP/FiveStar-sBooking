import React from 'react';
import '../assets/sass/welcome.scss';
import Navbar from '../components/Navbar';
import Video from '../assets/videos/earth.mp4';

const Welcome = () => {
  return (
    <div>

      <video autoPlay loop muted class="welcome-video">
        <source src={Video} type="video/mp4" />
      </video>

      <Navbar />

      <div>
        <h1>Embarquez pour un voyage 5 étoiles</h1>
      </div>

      <div>
        <h2>Avec nos magnifiques vaisseaux tout équipés</h2>
      </div>

    </div>
  )
}

export default Welcome