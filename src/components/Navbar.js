import React from 'react';
import '../assets/sass/navbar.scss';
import logo from '../assets/img/Logo.png'
import { BsPersonCircle } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const navigate = useNavigate();
  const goToProfil = ()=>{
    navigate("/profil");
  }

  

  return (
    <div className="navbar-container">

      <div className="logo-wrapper">
        <img src={logo} alt="logo Five star's Booking" />
      </div>

      <ul className="navbar">
        <li><Link smooth to="/home#about">à propos de nous</Link></li>
        <li><Link smooth to="/home#reservations">réservations</Link></li>   
        <li><Link smooth to="/home#contact">contact</Link></li>
      </ul>

      <div className="button" onClick={() => goToProfil()}>
        <BsPersonCircle />
      </div>

    </div>
  )
}

export default Navbar