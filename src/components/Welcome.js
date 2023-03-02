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

      <video autoPlay loop muted class="welcome-video">
        <source src={Video} type="video/mp4" />
      </video>

      <Navbar />

      <div className="box">
        <div>
          <h1>Embarquez pour un voyage 5 étoiles</h1>
        </div>

        <div>
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