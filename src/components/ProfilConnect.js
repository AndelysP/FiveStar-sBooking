import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profilLogin from '../assets/img/profil_login.jpg';
import '../assets/sass/profilConnect.scss';


const ProfilConnect = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})
    const [avatar, setAvatar] = useState("");

    const goToHome = () => {
        navigate("/home");
    }

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


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('avatar', avatar.file)

        await fetch(`http://localhost:5500/users/${user._id}`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${user.token}`,
            },
            body: formData
        }).then(res => res.json())
            .then(json => setUser({ ...user, avatar: json.avatar }));
    }

    const uploadsUrl = process.env.REACT_APP_UPLOADS_URL;


    return (

        <div>
            <Navbar />
            <div className="imageHero">
                <img src={profilLogin} alt="" />
            </div>

            <div className="helloProfil">


                {/* Affichage des données de l'utilisateur */}
                <div key={user._id} className="partieGauche">
                    <div className="avatar">
                        <img src={`${uploadsUrl}${user.avatar}`} alt="avatar utilisateur" />
                    </div>

                    <div className="uploadAvatar">
                        {/* Formulaire d'ajout d'une image de profil */}
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
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


    )
}

export default ProfilConnect
