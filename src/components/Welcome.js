import React from 'react';
import '../assets/sass/welcome.scss';
import Navbar from '../components/Navbar';
import Video from '../assets/videos/earth.mp4';
import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const navigate = useNavigate();

  function handleClick(page) {
    navigate(`/${page}`);
  }

  return (
    <div class="container">
      
      <Navbar />

      <video autoPlay loop muted className="welcome-video">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="box">
        <div className='box-title'>
          <h1>Embarquez pour un voyage 5 étoiles</h1>
        </div>

        <div className='box-subtitle'>
          <h2>À bord de nos magnifiques vaisseaux tout équipés</h2>
        </div>

        <button onClick={() => handleClick("home")}>
          Partir à l'aventure
        </button>
      </div>

    </div>
  )
}

export default Welcome