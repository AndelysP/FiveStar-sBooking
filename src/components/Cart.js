import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/sass/cart.scss';

import { useLocation } from 'react-router-dom';

const Cart = () => {

    const location = useLocation();

    const {repas, divertissement, selectedRange} = location.state;
    
    
    return (
        <>
            <Navbar />
            <div className="banner-cart">
                <div className="cart-text">
                    <h1>Votre panier</h1>
                </div>
            </div>

            <div className='cart-details'>
                <div className="cart-details_text">
                    <p>Il n'y a rien dans votre panier pour le moment</p>

                    <p> repas : {repas ? `oui` : `non`}</p>
                    <p> divertissement : {divertissement ? `oui` : `non`}</p>
                    <p>date : {selectedRange}</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart