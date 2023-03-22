import React from 'react';
import '../assets/sass/navbar.scss';
import logo from '../assets/img/Logo.png';
import { BsPersonCircle, BsBasket2Fill, BsPower } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("data")) || [];

  const goToProfil = () => {
    navigate("/profil");
  }

  const goToCart = () => {
    navigate("/cart");
  }

  const deconnexion = () => {
    localStorage.removeItem('user');
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

      <div className={`menu ${showNavbar && 'active'}`}>
        <ul className="navbar">
          <li><Link smooth to="/home#about">à propos de nous</Link></li>
          <li><Link smooth to="/home#reservations">réservations</Link></li>
          <li><Link smooth to="/home#contact">contact</Link></li>
        </ul>
      </div>

      <div className="buttons">
        <div className="hamburger" onClick={handleShowNavbar}>
          <CgMenu />
        </div>
        <div className="button-profil" onClick={() => goToProfil()}>
          <BsPersonCircle />
        </div>  
        <div className="button-deconnect" onClick={() => deconnexion()}>
          <BsPower />
        </div>
        <div className="button-cart" onClick={() => goToCart()}>
          <BsBasket2Fill />
          {items.length > 0 && <span className="cart-items-count">{items.length}</span>}
        </div>

      </div>

    </div>
  )
}

export default Navbar