import React from 'react';
import '../assets/sass/navbar.scss';
import logo from '../assets/img/Logo.png'
import { BsPersonCircle } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

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
        <li> <a href="">à propos de nous</a> </li>
        <li> <a href="#reservations">réservation</a> </li>
        <li> <a href="">contact</a> </li>
      </ul>

      <div className="button" onClick={() => goToProfil()}>
        <BsPersonCircle />
      </div>

    </div>
  )
}

export default Navbar