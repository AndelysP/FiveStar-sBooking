import React from 'react';
import '../assets/sass/home.scss';
import rocket from '../assets/img/icons/rocket.png'

const ContactForm = () => {
    return (
        <div className="contact">
            <div className="title">
                <h1>Nous contacter</h1>
            </div>

            <div className="rocket-img">
                <img src={rocket} alt="Rocket Illustration" />
            </div>

            <div className="form">
                <form action="">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" id="name" placeholder='* Nom, Prénom....' />

                    <label htmlFor="email"></label>
                    <input type="email" placeholder='* Adresse e-mail...' id="email" name="email" />

                    <label htmlFor="phone"></label>
                    <input type="tel" name='phone' id="phone" placeholder='N° de téléphone... (facultatif)' />

                    <label htmlFor="message"></label>
                    <textarea name="message" id="message" placeholder='* Votre message...' rows="12" cols="20" />

                    <p>* Ces champs sont obligatoires</p>

                    <input type="submit" value="Envoyer" />
                </form>
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