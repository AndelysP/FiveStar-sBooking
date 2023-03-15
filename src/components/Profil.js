import React, { useEffect, useState, useRef } from 'react';
import '../assets/sass/profil.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from './Modal';
import bluePlanet from '../assets/img/icons/blue_planet.png';
import accountIllu from '../assets/img/icons/create_account.png';
import mdpIllu from '../assets/img/icons/connexion_image.png';

const Profil = () => {

  const [showMdp, setShowMdp] = useState(false); // Définition du state à false
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div>

      <Navbar />

      <div className="blue-planet">
        <img src={bluePlanet} alt="" />
      </div>

      <div className="hero">
        <h1>Bienvenue dans votre espace personnel</h1>
      </div>

      <div className="form-connection">
        <form>

          <label htmlFor="email"></label>
          <input type="email" placeholder='* Adresse e-mail' id="email" name="email" />

          <label htmlFor="password"></label>
          <input type="password" placeholder='* Mot de passe' id="password" name="password" />

          <p>* Ces champs sont obligatoires</p>

          <input type="submit" value="Connexion" />

          {/* Mot de passe oublié */}

          {/* Quand je clique sur le bouton mon state passe à true, penser à ajouter le type button sinon comme on est dans un formulaire, le bouton est considéré comme un submit donc la modale se ferme seule */}
          <button type='button' class="password-btn" onClick={() => setShowMdp(true)}>Mot de passe oublié</button>

          {/* Quand on state est à true, on applique la classe active à mask et modal, sinon on ne fait rien */}


          {/* On passe les props au composant ModalMdp pour pouvoir les utiliser dans Modal.js, la prop showModal appliquera la classe active aux éléments qui doivent être affichés lorsque showMdp est vrai. La prop setShowModal  pour que le bouton "X" puisse fermer la modal en appelant setShowMdp(false) */}
          <Modal showModal={showMdp} setShowModal={setShowMdp}>

            <div className="image">
              <img src={mdpIllu} alt="" />
            </div>
            <div className="content">

              <h3>Réinitialisez votre mot de passe</h3>
              <p>Veuillez nous indiquer votre adresse mail, nous vous enverrons un lien afin de réinitialiser votre mot de passe</p>

              <label htmlFor="email"></label>
              <div className="inputEmail">
                <input type="email" placeholder='* Adresse e-mail' id="email" name="email" />
              </div>

              <button type='button' class="password-btn">Envoyer</button>
            </div>

          </Modal>

        </form>
      </div>

      {/* Wave */}
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bef2ea" fill-opacity="1" d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,224C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>

      {/* Création de compte */}
      <div className="account">
        <div className="title-account">
          <p>Pas encore inscrit.e ?</p>
        </div>

        <button type='button' class="password-btn" onClick={() => setShowAccount(true)}>Créer mon compte</button>


        <Modal showModal={showAccount} setShowModal={setShowAccount}>
          <div className="image">
            <img src={accountIllu} alt="" />
          </div>
          <div className="content">
            <h3>Créez votre compte</h3>
            <p>Renseignez les champs suivants afin de créer votre compte :</p>

            <label htmlFor="userfirstname"></label>
            <div className="inputUserFirstname">
              <input type="text" placeholder='* Prénom' id="userfirstname" name="userfirstname" />
            </div>

            <label htmlFor="userlastname"></label>
            <div className="inputUserLastname">
              <input type="text" placeholder='* Nom' id="userlastname" name="userlastname" />
            </div>

            <label htmlFor="email"></label>
            <div className="inputEmail">
              <input type="email" placeholder='* Adresse e-mail' id="email" name="email" />
            </div>

            <label htmlFor="password"></label>
            <div className="inputPassword">
              <input type="text" placeholder='* Mot de passe' id="password" name="password" />
            </div>

            <button type='button' class="password-btn">C'est parti !</button>
          </div>
        </Modal>
        
      </div>

      <Footer />
    </div>
  )
}

export default Profil