import React, { useEffect, useState } from 'react';
import '../assets/sass/item.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { useParams } from 'react-router';

const Item = () => {

  const { id } = useParams();
  const [item, setItem] = useState();

  // On récupère l'id de l'item cliqué 
  const getItem = async () => {
    await fetch(`http://localhost:5500/ships/${id}`)
    .then(response => response.json())
    .then(data => setItem(data));
  }

  useEffect(() => {
    getItem()
  }, []);
  
  // S'il n'y a rien dans le state item
  if (!item) {
    return <div>Page en cours de chargement...</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>

        <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />

        <img src={require("../assets/img/ships/Bathroom/" + item.name + "_Bathroom.png")} alt={item.name} />

        <img src={require("../assets/img/ships/Bedroom/" + item.name + "_Bedroom.png")} alt={item.name} />

        <img src={require("../assets/img/ships/Inside/" + item.name + "_Inside.png")} alt={item.name} />
      </div>
      <Footer />
    </>
  )
}

export default Item;