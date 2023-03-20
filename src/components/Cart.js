import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/sass/cart.scss';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Card, message, Popconfirm } from 'antd';

import { formatDate, displayPrice } from '../helpers';

const Cart = () => {

    const [cartData, setCartData] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data")) || [];
        setCartData(data);

        // calculer le total des prix de tous les produits dans le panier
        const cartTotal = data.reduce((acc, item) => acc + calculPrice(item), 0)
        setTotal(cartTotal);

    }, []);

    const remove = (index) => {
        const removeProducts = [...cartData];
        removeProducts.splice(index, 1);
        setCartData(removeProducts);
        localStorage.setItem("data", JSON.stringify(removeProducts));

        // recalculer le total après la suppression d'un produit
        const cartTotal = removeProducts.reduce((acc, item) => acc + calculPrice(item), 0);
        setTotal(cartTotal);
    };

    // calcul du total en fonction des options choisies par l'utilisateur
    const calculPrice = (item) => {
        let price = item.price;

        if (item.repas) {
            price += 300;
        }
        if (item.divertissement) {
            price += 150;
        }

        return price;
    };


    return (
        <>
            <Navbar />
            <div className="banner-cart">
                <div className="cart-text">
                    <h1>Votre panier</h1>
                </div>
            </div>

            {cartData.length > 0 ? (
                <>
                    <div className='cart-article-nb'>
                        <p>Il y a {cartData.length} produit{cartData.length > 1 ? 's' : ''} dans votre panier</p>
                    </div>

                    <div className='basket'>

                        <div className="cart-details">

                            {cartData.map((item, index) => (
                                <div key={index}>
                                    <div className='cart-items' key={item._id}>
                                        <div className="cart-img">
                                            <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
                                        </div>

                                        <div className="cart-text">
                                            <h1>{item.name}</h1>
                                            <p>Dates : {formatDate(item.selectedRange[0])} au {formatDate(item.selectedRange[1])}</p>
                                            <p>Repas premium : {item.repas ? `Oui (300€)` : `Non`}</p>
                                            <p>Option divertissement : {item.divertissement ? `Oui (150€)` : `Non`}</p>
                                        </div>

                                        <div className="cart-price">
                                            <p className='price'>{displayPrice(calculPrice(item))}</p>
                                            <Popconfirm
                                                placement="top"
                                                title="Êtes-vous sûr de vouloir supprimer cet article de votre panier ?"
                                                description="Supprimer l'article"
                                                onConfirm={() => {
                                                    remove(index);
                                                    message.success("L'article a été supprimé de votre panier")
                                                }}
                                                okText="Oui"
                                                cancelText="Non"
                                            >
                                                <a href="#"><RiDeleteBin6Line size={20} color="red" /></a>
                                            </Popconfirm>

                                        </div>

                                    </div>

                                </div>
                            ))}



                        </div>


                        <div className="cart-details summary">

                            <h1>Carte de crédit </h1>
                            <div className="credit-card">

                                <div className="credit-card_img">
                                    <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg" />
                                </div>
                                <div className="credit-card_img">
                                    <img className="pay" src="https://i.imgur.com/OdxcctP.jpg" />
                                </div>
                                <div className="credit-card_img">
                                    <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg" />
                                </div>
                            </div>

                            <h1>Paiement</h1>
                            <form className="form-pay">

                                <div className='form-group'>
                                    <label hmtlfor="name">Nom du titulaire</label>
                                    <input type="text" id="name" placeholder="Nom du titulaire" />
                                </div>

                                <div className='form-group'>
                                    <label hmtlfor="cardNumber">Numéro de carte</label>
                                    <input type="text" id="cardNumber" placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                </div>

                                <div className='form-group'>
                                    <label hmtlfor="cardExp">Date d'expiration</label>
                                    <input type="text" id="cardExp" placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                </div>

                                <div className="form-group">
                                    <label hmtlfor="cardCvv">CVV</label>
                                    <input type="password" id="cardCvv" placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                </div>

                                <div className="total">
                                    <p><span>Total (taxes incluses):</span> {displayPrice(total)}</p>
                                </div>
                                <input type='submit' value='Recevoir le devis' className='submit-paiement' />
                            </form>
                        </div>
                    </div >
                </>

            ) : (
                <div className='cart-article-nb empty'>
                    <p>Il n'y a rien dans votre panier pour le moment</p>
                </div>
            )}



            <Footer />
        </>
    )
}

export default Cart