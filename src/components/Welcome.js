import React from 'react';
import '../assets/sass/welcome.scss';
import Navbar from '../components/Navbar';
import Video from '../assets/videos/earth.mp4';
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/Logo.png'
import { BsPersonCircle } from "react-icons/bs"

const Welcome = () => {

  const navigate = useNavigate();

  const goToProfil = () => {
    navigate("/profil");
  }

  function handleClick(page) {
    navigate(`/${page}`);
  }

  return (
    <div className="container">

      <video autoPlay loop muted className="welcome-video">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="navbar-welcome">
        <div className="logo-wrapper">
          <img src={logo} alt="logo Five star's Booking" />
        </div>

        <div className="button-profile" onClick={() => goToProfil()}>
          <BsPersonCircle />
        </div>
      </div>

      <div className="box">
        <div className='box-title'>
          <h1>Embarquez pour un voyage 5 étoiles</h1>
        </div>

        <div className='box-subtitle'>
          <h2>À bord de nos magnifiques vaisseaux tout équipés</h2>
        </div>

        <button className="box-btn" onClick={() => handleClick("home")}>
          Partir à l'aventure
        </button>
      </div>

    </div>
  )
}

export default Welcome