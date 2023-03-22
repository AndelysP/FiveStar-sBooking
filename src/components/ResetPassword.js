import React from 'react'
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from './ContactFiles/ValidationContact';
import InlineError from './ContactFiles/InlineError';

const ResetPassword = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        resetPassword({ newPassword, setPasswordError })
    }, [newPassword]);

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword != confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
        }

        const response = await fetch(`http://localhost:5500/resetPassword`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                newPassword,
            })
        });

        if (response.ok) {
            navigate('/profil');
        } else {
            toast.error('Utilisateur introuvable, assurez vous que l\e-mail correspond à celui de votre compte.');
        }
    };

    return (
        <div className='reset-password'>
            <h1>Réinitialisation de votre mot de passe</h1>
            <p>Pas de soucis, cela arrive même aux meilleurs d'entre nous. </p>
            <br />
            <p>Entrez votre adresse e-mail et nous vous enverrons un e-mail pour réinitialiser votre mot de passe.</p>
            <div className="form-reset">

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Votre adresse e-mail :</label>
                    <input
                        type="email"
                        placeholder='exemple@gmail.com'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="newPassword">Nouveau mot de passe :</label>
                    <input
                        type="password"
                        placeholder=' Nouveau mot de passe'
                        id="newPassword"
                        name="newpassword"
                        value={newPassword}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <InlineError error={passwordError} />}
                    <label htmlFor='cPassword'>Confirmer le nouveau mot de passe :</label>
                    <input
                        type="password"
                        placeholder='Confirmez le nouveau mot de passe'
                        id='cPassword'
                        name='cpassword'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />

                    <button type="submit">Réinitialiser le mot de passe</button>
                </form>

                <ToastContainer />
            </div>
        </div>

    );
}

export default ResetPassword