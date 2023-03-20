import React, { useState, useEffect } from 'react';
import '../assets/sass/profil.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from './Modal';
import bluePlanet from '../assets/img/icons/blue_planet.png';
import accountIllu from '../assets/img/icons/create_account.png';
import mdpIllu from '../assets/img/icons/connexion_image.png';
import InlineError from './ContactFiles/InlineError';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Profil = () => {

  const [showMdp, setShowMdp] = useState(false); // Définition du state à false
  const [showAccount, setShowAccount] = useState(false);

  const [userfirstname, setUserfirstname] = useState("");
  const [userlastname, setUserlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Pour les erreurs :
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    validatePassword({ password, setPasswordError })
    validateEmail({ email, setEmailError })
  }, [password, email])

  // Validation du mot de passe
  const validatePassword = ({ password, setPasswordError }) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    return password && !password.match(passwordRegex)
      ? setPasswordError("Votre mot de passe doit contenir minimum 12 caractères, dont au moins une lettre, un chiffre et un caractère spécial")
      : setPasswordError("");
  };

  // Validation du mail
  const validateEmail = ({ email, setEmailError }) => {
    const emailRegular = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return email && !email.match(emailRegular)
      ? setEmailError("Email non valide")
      : setEmailError("");
  };

  // Récupération des données lors de l'envoi du formulaire et enregistrement en bdd :
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5500/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userfirstname,
        userlastname,
        email,
        password
      })
    })

    if (response.status === 400) {
      toast.error('❌ Un compte existe déjà à cette adresse mail');
    } else {
      setUserfirstname("");
      setUserlastname("");
      setEmail(""); 
      setPassword(""); 
  
      navigate("/profilConnect"); // On redirige l'utilisateur sur la page profil qu'il voit lorsqu'il est connecté
    }
  }


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

          <label htmlFor="emailConnexion"></label>
          <input type="email" placeholder='* Adresse e-mail' id="emailConnexion" name="email" />

          <label htmlFor="passwordConnexion"></label>
          <input type="password" placeholder='* Mot de passe' id="passwordConnexion" name="password" />

          <p>* Ces champs sont obligatoires</p>

          <input type="submit" value="Connexion" />

          {/* Mot de passe oublié */}

          {/* Quand je clique sur le bouton mon state passe à true, penser à ajouter le type button sinon comme on est dans un formulaire, le bouton est considéré comme un submit donc la modale se ferme seule */}
          <button type='button' className="password-btn" onClick={() => setShowMdp(true)}>Mot de passe oublié</button>
        </form>
        {/* Quand on state est à true, on applique la classe active à mask et modal, sinon on ne fait rien */}


        {/* On passe les props au composant ModalMdp pour pouvoir les utiliser dans Modal.js, la prop showModal appliquera la classe active aux éléments qui doivent être affichés lorsque showMdp est vrai. La prop setShowModal  pour que le bouton "X" puisse fermer la modal en appelant setShowMdp(false) */}
        <Modal showModal={showMdp} setShowModal={setShowMdp}>

          <div className="image">
            <img src={mdpIllu} alt="" />
          </div>
          <div className="content">

            <h3>Réinitialisez votre mot de passe</h3>
            <p>Veuillez nous indiquer votre adresse mail, nous vous enverrons un lien afin de réinitialiser votre mot de passe</p>
            <form>
              <label htmlFor="emailForget"></label>
              <div className="inputEmail">
                <input type="email" placeholder='* Adresse e-mail' id="emailForget" name="email" />
              </div>

              <button type='button' className="password-btn">Envoyer</button>
            </form>
          </div>

        </Modal>


      </div>

      {/* Wave */}
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bef2ea" fillOpacity="1" d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,224C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>

      {/* Création de compte */}
      <div className="account">
        <div className="title-account">
          <p>Pas encore inscrit.e ?</p>
        </div>

        <button type='button' className="password-btn" onClick={() => setShowAccount(true)}>Créer mon compte</button>


        <Modal showModal={showAccount} setShowModal={setShowAccount}>
          <div className="image">
            <img src={accountIllu} alt="" />
          </div>
          <div className="content">
            <h3>Créez votre compte</h3>
            <p>Renseignez les champs suivants afin de créer votre compte :</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="userfirstname"></label>
              <div className="inputUserFirstname">
                <input type="text" value={userfirstname} placeholder='* Prénom' id="userfirstname" name="userfirstname" onChange={(event) => setUserfirstname(event.target.value)} />
              </div>

              <label htmlFor="userlastname"></label>
              <div className="inputUserLastname">
                <input type="text" value={userlastname} placeholder='* Nom' id="userlastname" name="userlastname" onChange={(event) => setUserlastname(event.target.value)} />
              </div>

              <label htmlFor="email"></label>
              <div className="inputEmail">
                <input type="email" value={email} placeholder='* Adresse e-mail' id="email" name="email" onChange={(event) => setEmail(event.target.value)} />
              </div>
              {emailError && <InlineError error={emailError} />}


              <label htmlFor="password"></label>
              <div className="inputPassword">
                <input type="password" value={password} placeholder='* Mot de passe' id="password" name="password" onChange={(event) => setPassword(event.target.value)} />
              </div>
              {passwordError && <InlineError error={passwordError} />}

              <button type='submit' className="password-btn">C'est parti !</button>
            </form>
            <ToastContainer/>
          </div>

        </Modal>

      </div>

      <Footer />
    </div >
  )
}

export default Profil