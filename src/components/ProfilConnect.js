import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import profilLogin from '../assets/img/profil_login.jpg';
import '../assets/sass/profilConnect.scss';


const ProfilConnect = () => {

    const API = "http://localhost:5500/users";
    const [data, setData] = useState([]); // données du JSON

    const getUser = async () => {
        await fetch(`${API}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUser()
    }, []);

    return (
        <div>
            <Navbar />
            <div className="imageHero">
                <img src={profilLogin} alt="" />
            </div>

            <div className="helloProfil">

                {data.map((user) => (
                    <>
                        <h1>Bonjour {user.userfirstname}</h1>

                        <p>Prêt.e à embarquer avec nous ?</p>

                        <button type='button' className="password-btn">Réservez un voyage</button>
                    </>
                ))}

            </div>

            <Footer />
        </div>

    )
}

export default ProfilConnect