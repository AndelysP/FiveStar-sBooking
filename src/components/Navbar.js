import React from 'react';
import '../assets/sass/navbar.scss';
import logo from '../assets/img/Logo.png';
import { BsPersonCircle } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const goToProfil = () => {
    navigate("/profil");
  }

  const goToWelcome = () => {
    navigate("/");
  }

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="navbar-container">

      <div className="logo-wrapper" onClick={() => goToWelcome()}>
        <img src={logo} alt="logo Five star's Booking" />
      </div>

      <div>
        <div className="hamburger" onClick={handleShowNavbar}>
          <CgMenu />
        </div>

        <div className={`menu ${showNavbar && 'active'}`}>
          <ul className="navbar">
            <li> <a href="">à propos de nous</a> </li>
            <li> <a href="">réservation</a> </li>
            <li> <a href="">contact</a> </li>
          </ul>
        </div>
      </div>




      <div className="button" onClick={() => goToProfil()}>
        <BsPersonCircle />
      </div>

    </div>
  )
}

export default Navbar