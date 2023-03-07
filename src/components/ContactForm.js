import React, { useEffect, useState } from 'react';
import '../assets/sass/home.scss';
import rocket from '../assets/img/icons/rocket.png'
import { validateEmail, validateMessage, validateName, validatePhone } from './ContactFiles/ValidationContact';
import InlineError from './ContactFiles/InlineError';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [messageError, setMessageError] = useState("");

    useEffect(() => {
        // VALIDATION
        validateName({ name, setNameError })
        validateEmail({ email, setEmailError })
        validatePhone({ phone, setPhoneError })
        validateMessage({ message, setMessageError })
    }, [name, email, phone, message]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Si tous les champs sont remplis , on vérifie s'il n'y a pas d'erreurs dans les champs, si les deux conditions sont remplies => envoie du message
        if (!name || !email || !message) {
            toast.error('❌ Veuillez-remplir les champs obligatoires');
        } else if (!nameError && !emailError && !phoneError && !messageError) {
            fetch("http://localhost:5500/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message
                })
            })
                .then(response => {
                    // console.log(response);
                    toast.success('🚀 Message envoyé avec succès !');
                })
                .catch(error => {
                    // console.log(error);
                    toast.error('❌ Une erreur est survenue, veuillez réessayer plus tard.');
                });
        } else {
            toast.error('❌ Une erreur est survenue, veuillez réessayer plus tard.');
        }

    };

    return (
        <div id="contact">
            <div className="title">
                <h1>Nous contacter</h1>
            </div>

            <div className="rocket-img">
                <img src={rocket} alt="Rocket Illustration" />
            </div>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id="name"
                        placeholder='* Nom, Prénom....'
                        onChange={(event) => setName(event.target.value)}
                    />
                    {nameError && <InlineError error={nameError} />}

                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        value={email}
                        placeholder='* Adresse e-mail...'
                        id="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {emailError && <InlineError error={emailError} />}

                    <label htmlFor="phone"></label>
                    <input
                        type="tel"
                        value={phone}
                        name='phone'
                        id="phone"
                        placeholder='N° de téléphone... (facultatif)'
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    {phoneError && <InlineError error={phoneError} />}

                    <label htmlFor="message"></label>
                    <textarea
                        name="message"
                        value={message}
                        id="message"
                        placeholder='* Votre message...'
                        rows="12" cols="20"
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    {messageError && <InlineError error={messageError} />}

                    <p>* Ces champs sont obligatoires</p>

                    <input type="submit" value="Envoyer" />
                </form>

                <ToastContainer
                />
            </div>

            <div className="contact-footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#b5f7ed" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,53.3C672,75,768,149,864,160C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default ContactForm