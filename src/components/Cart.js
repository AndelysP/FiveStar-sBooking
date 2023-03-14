import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/sass/cart.scss';

const Cart = () => {

    // const location = useLocation();
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    const { repas, divertissement, selectedRange } = cartData || {};

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

                    {selectedRange ? (
                        <>                        
                            <p>Dates : {selectedRange}</p>
                            <p>Repas premium : {repas ? `Oui` : `Non`}</p>
                            <p>Option divertissement : {divertissement ? `Oui` : `Non`}</p>
                        </>

                    ) : (
                        <p>Il n'y a rien dans votre panier pour le moment</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart