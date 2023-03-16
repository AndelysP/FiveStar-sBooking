import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/sass/cart.scss';
import { RiDeleteBin6Line } from "react-icons/ri";

import { message, Popconfirm } from 'antd';

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

        if(item.repas) {
            price+=300;
        }
        if(item.divertissement) {
            price+=150;
        }

        return price;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
      };

    return (
        <>
            <Navbar />
            <div className="banner-cart">
                <div className="cart-text">
                    <h1>Votre panier</h1>
                </div>
            </div>

            <div className='cart-details'>
                <div className='cart-article-nb'>
                    <p>Il y a {cartData.length} produits dans votre panier</p>
                </div>

                <div className="cart-details_text">

                    {cartData.length > 0 ? (
                        cartData.map((item, index) => (
                            <>

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
                                        <input type="number" value="1" />
                                        <p className='price'>{calculPrice(item)} €</p>
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
                            </>
                        ))

                    ) : (
                        <p>Il n'y a rien dans votre panier pour le moment</p>
                    )}
                </div>

                <div className="cart-details_text">
                    <div className="subtotal cart-items">
                        <p>Total (taxes incluses): {total} €</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart