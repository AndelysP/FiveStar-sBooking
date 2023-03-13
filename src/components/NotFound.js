import React, { useEffect, useRef, useState } from 'react';
import '../assets/sass/notfound.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Notfound from '../assets/img/icons/notfound.png'
import Notfound2 from '../assets/img/icons/notfound2.png'

const NotFound = () => {

  return (
    <div className="boxNotFound">
      <Navbar />

      <div className="imgNotFound">

        <img className="dessus" src={Notfound} alt="image de decor" />
        <div className="dessous">
          <img src={Notfound2} alt="image de decor2" />
        </div>

      </div>

      <div className="content404">
        <h1>404</h1>
        <p>Oups, on dirait que vous êtes perdu !</p>
      </div>

    </div>

  )
}


export default NotFound