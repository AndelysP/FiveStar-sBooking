import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/sass/cart.scss';

import { useLocation } from 'react-router';

const Cart = () => {

    const location = useLocation();
    const { selectedRange, repas, divertissement } = location.state;

    // const selectedRange = props.location.state.selectedRange;
    // const repas = props.location.state.repas;
    // const divertissement = props.location.state.divertissement;

    console.log(selectedRange)

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

                    <p> Dates: {selectedRange}</p>
                    <p>Repas premium : {repas ? 'Oui' : 'Non'}</p>
                    <p>Option divertissement : {divertissement ? 'Oui' : 'Non'}</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart