import React, { useEffect, useState, useRef }  from 'react';
import '../assets/sass/profil.scss';
import Navbar from './Navbar';

const Profil = () => {

  const [show, setShow] = useState(false); // Définition du state à false


  return (
    <div>

      <Navbar />

      <div className="hero">
        <h1>Bienvenue dans votre espace personnel</h1>
      </div>

      <div className="form">
        <form>

          <label htmlFor="email"></label>
          <input type="email" placeholder='* Adresse e-mail' id="email" name="email" />

          <label htmlFor="password"></label>
          <input type="password" placeholder='* Mot de passe' id="password" name="password" />

          <p>* Ces champs sont obligatoires</p>

          <input type="submit" value="Connexion" />

          {/* Mot de passe oublié */}

          {/* Quand je clique sur le bouton mon state passe à true, penser à ajouter le type button sinon comme on est dans un formulaire, le bouton est considéré comme un submit donc la modale se ferme seule */}
          <button type='button' class="password-btn" onClick={() => setShow(true)}>Mot de passe oublié</button> 

          {/* Quand on state est à true, on applique la classe active à mask et modal, sinon on ne fait rien */}
          <div className={`mask ${show ? 'active' : ''}`}></div>
          <div className={`modal ${show ? 'active' : ''}`}>
            <h3>Réinitialisez votre mot de passe</h3>
            <p>Veuillez nous indiquer votre adresse mail, nous vous enverrons un lien afin de réinitialiser votre mot de passe</p>

            <button className="close">X</button>
          </div>


        </form>
      </div>

    </div>

  )
}

export default Profil