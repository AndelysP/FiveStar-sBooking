import React, { useState, useEffect } from 'react';
import '../assets/sass/profil.scss';
import '../assets/sass/profilConnect.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import UserModal from './UserModal';
import bluePlanet from '../assets/img/icons/blue_planet.png';
import accountIllu from '../assets/img/icons/create_account.png';
import mdpIllu from '../assets/img/icons/connexion_image.png';
import InlineError from './ContactFiles/InlineError';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { validatePassword, validateEmail } from './ContactFiles/ValidationContact';
import profilLogin from '../assets/img/profil_login.jpg';
import { Avatar } from 'antd';

const Profil = () => {
  const navigate = useNavigate();

  const [userfirstname, setUserfirstname] = useState("");
  const [userlastname, setUserlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Récupérer les données de connexion
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [avatar, setAvatar] = useState("");

  // Pour les erreurs :
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    validatePassword({ password, setPasswordError })
    validateEmail({ email, setEmailError })
  }, [password, email])

  // Récupération des données lors de l'envoi du formulaire et enregistrement en bdd :
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password || !userfirstname || !userlastname || !email) {
      toast.error('❌ Veuillez-remplir tous les champs')
    } else {
      const response = await fetch(`${process.env.REACT_APP_BDD}/users`, {
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
        toast.success('✔️ Votre compte a bien été créé');
        setUserfirstname("");
        setUserlastname("");
        setEmail("");
        setPassword("");
      }
    }
  }

  // enregistrer le token dans le local storage 
  const handleConnect = async (event) => {
    event.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_BDD}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.status === 200) {
      const data = await response.json();
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
    } else {
      toast.error('❌ L\'email ou le mot de passe est incorrect');
    }
  }

  // Mdp oublié
  const forgetPassword = async (e) => {
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_BDD}/forgetPassword`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    })
      .then(response => {
        setEmail('');
        toast.success('Un e-mail de réinitialisation vous a été envoyé à cette adresse !');
      })
      .catch(error => {
        // console.log(error);
        toast.error('❌ Une erreur est survenue, veuillez réessayer plus tard.');
      });
  }

  //-------------------------------Partie Connexion---------------------------------------------

  const goToHome = () => {
    navigate("/home");
  }

  const getUserLogged = async () => {
    const response = await fetch(`${process.env.REACT_APP_BDD}/users/${user.userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      }
    });

    if (response.status === 200) {
      const data = await response.json();
      setUser(data);
    }

    console.log(user)
  };

  useEffect(() => {
    if (user) {
      getUserLogged();
    }
  }, [user]);

  const handleSubmitAvatar = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', avatar.file)

    await fetch(`${process.env.REACT_APP_BDD}/users/${user._id}`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
      body: formData
    }).then(res => res.json())
      .then(json => setUser({ ...user, avatar: json.avatar }))
  }

  const uploadsUrl = process.env.REACT_APP_UPLOADS_URL;

  return (

    <>
      {user ? (
        <div>
          <Navbar />
          <div className="imageHero">
            <img src={profilLogin} alt="" />
          </div>

          <div className="helloProfil">
            {/* Affichage des données de l'utilisateur */}
            <div key={user._id} className="partieGauche">
              <div className="avatar">
                <Avatar size={150} src={`${uploadsUrl}${user.avatar}`} alt="avatar utilisateur" />
              </div>

              <div className="uploadAvatar">
                {/* Formulaire d'ajout d'une image de profil */}
                <form onSubmit={handleSubmitAvatar} encType="multipart/form-data">
                  <p>Ajouter ou modifier mon avatar :</p>
                  <input type="file" name="avatar" onChange={(e) => setAvatar({ file: e.target.files[0] })} />
                  <button type='submit' className="uploadAvatar button-avatar" >Ajouter</button>
                </form>
              </div>
            </div>


            <div className="partieDroite">
              <h1>Bonjour {user.userfirstname},</h1>

              <p>Prêt.e à embarquer avec nous ?</p>

              <button type='button' className="button-avatar" onClick={() => goToHome()}>Réservez un voyage</button>

            </div>
          </div>
          <Footer />
        </div>

      ) : (

        <div>

          <Navbar />

          <div className="blue-planet">
            <img src={bluePlanet} alt="" />
          </div>

          <div className="hero">
            <h1>Bienvenue dans votre espace personnel</h1>
          </div>

          <div className="form-connection">
            <form onSubmit={handleConnect}>

              <label htmlFor="emailConnexion"></label>
              <input type="email" placeholder='* Adresse e-mail' id="emailConnexion" name="email" onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="passwordConnexion"></label>
              <input type="password" placeholder='* Mot de passe' id="passwordConnexion" name="password" onChange={(e) => setPassword(e.target.value)} />

              <p>* Ces champs sont obligatoires</p>

              <input type="submit" value="Connexion" />

              {/* Mot de passe oublié */}
            </form>
          </div>

          <div className="forgetPassword">
            <UserModal
              buttonText={"Mot de passe oublié"}
              modalContent={
                <>
                  <div className="image">
                    <img src={mdpIllu} alt="" />
                  </div>
                  <div className="content">

                    <h3>Réinitialisez votre mot de passe</h3>
                    <p>Veuillez nous indiquer votre adresse mail, nous vous enverrons un lien afin de réinitialiser votre mot de passe</p>
                    <form onSubmit={forgetPassword}>
                      <label htmlFor="emailForget"></label>
                      <input type="email" placeholder='* Adresse e-mail' id="emailForget" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />

                      <button type='submit' className="password-btn">Envoyer</button>
                    </form>
                  </div>
                </>
              }
            />
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

            <UserModal

              buttonText={"Créer mon compte"}
              modalContent={
                <>
                  <div className="image">
                    <img src={accountIllu} alt="" />
                  </div>
                  <div className="content">
                    <h3>Créez votre compte</h3>
                    <p>Renseignez les champs suivants afin de créer votre compte :</p>

                    <form onSubmit={handleSubmit}>
                      <label htmlFor="userfirstname"></label>
                      <input type="text" value={userfirstname} placeholder='* Prénom' id="userfirstname" name="userfirstname" onChange={(event) => setUserfirstname(event.target.value)} />


                      <label htmlFor="userlastname"></label>
                      <input type="text" value={userlastname} placeholder='* Nom' id="userlastname" name="userlastname" onChange={(event) => setUserlastname(event.target.value)} />


                      <label htmlFor="email"></label>
                      <input type="email" value={email} placeholder='* Adresse e-mail' id="email" name="email" onChange={(event) => setEmail(event.target.value)} />

                      {emailError && <InlineError error={emailError} />}


                      <label htmlFor="password"></label>
                      <input type="password" value={password} placeholder='* Mot de passe' id="password" name="password" onChange={(event) => setPassword(event.target.value)} />

                      {passwordError && <InlineError error={passwordError} />}

                      <button type='submit' className="password-btn">C'est parti !</button>
                    </form>
                  </div>
                </>
              }
            />

          </div>
          <ToastContainer />
          <Footer />
        </div >
      )}
    </>

  )
}


export default Profil