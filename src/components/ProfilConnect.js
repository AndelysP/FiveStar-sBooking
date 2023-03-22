import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profilLogin from '../assets/img/profil_login.jpg';
import '../assets/sass/profilConnect.scss';
import { json } from 'react-router-dom';


const ProfilConnect = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})

    const getUserLoged = async () => {
        await fetch(`http://localhost:5500/users/${user.userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`,
            }
        })
            .then(res => {
                if (res.status === 401) {
                    localStorage.removeItem('user');
                    navigate("/profil"); // On redirige l'utilisateur sur la page connexion 
                }
               return res.json()
            })
            .then(data => setUser(data))
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUserLoged()
    }, []);

    return (
        <div>
            <Navbar />
            <div className="imageHero">
                <img src={profilLogin} alt="" />
            </div>

            <div className="helloProfil">


                <>
                    <h1>Bonjour {user.userfirstname} {user.userlastname}  </h1>

                    <p>Prêt.e à embarquer avec nous ?</p>

                    <button type='button' className="password-btn">Réservez un voyage</button>
                </>


            </div>

            <Footer />
        </div>

    )
}

export default ProfilConnect