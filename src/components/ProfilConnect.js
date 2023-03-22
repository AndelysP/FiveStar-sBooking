import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import profilLogin from '../assets/img/profil_login.jpg';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/profilConnect.scss';


const ProfilConnect = () => {

    const API = "http://localhost:5500/users/6414190d05aa9f3fba3d4b14";
    const [user, setUser] = useState({}); // données du JSON

    const [avatar, setAvatar] = useState("");

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    }

    const getUser = async () => {
        await fetch(`${API}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUser()
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('avatar', avatar.file)



        await fetch("http://localhost:5500/users/6414190d05aa9f3fba3d4b14", {
            method: "POST",
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
                            <button type='submit' className="uploadAvatar password-btn" >Ajouter</button>
                        </form>
                    </div>
                </div>


                <div className="partieDroite">
                    <h1>Bonjour {user.userfirstname}</h1>

                    <p>Prêt.e à embarquer avec nous ?</p>

                    <button type='button' className="password-btn" onClick={() => goToHome()}>Réservez un voyage</button>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default ProfilConnect