import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/sass/cart.scss';

const Cart = () => {

    // const location = useLocation();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data")) || [];
        setCartData(data);
    }, []);


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

                    {cartData.length > 0 ? (
                        cartData.map((item) => (
                            <>
                                <div key={item._id} className="cart-details_products"></div>
                                <p>{item.name}</p>
                                <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
                                <p>{item.price} €</p>
                                <p>Dates : {item.selectedRange}</p>
                                <p>Repas premium : {item.repas ? `Oui` : `Non`}</p>
                                <p>Option divertissement : {item.divertissement ? `Oui` : `Non`}</p>
                            </>
                        ))

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