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
    return (
      <div>
        <div className="navbar-wrapper">
          <Navbar />
        </div>

        <h1>Page en cours de chargement</h1>

        <Footer />
      </div>
    )
  }

  return (
    <>
    <div className="navbar-wrapper">
      <Navbar />
    </div>

    <div className="cover">
    <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
      <h1>{item.name}</h1>
    </div>

    {/* formulaire filtre a ajouter ici */}

    <div className="ship-details">

      <div className="wrapper1">
        <div className="ship-pictures">

          <div className="main-pic">
          <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
          </div>

          {/* utilisation du composant carroussel antD */}

          <div className="rooms-pic">
          <img src={require("../assets/img/ships/Bedroom/" + item.name + "_Bedroom.png")} alt={item.name} />
            <img src={require("../assets/img/ships/Bathroom/" + item.name + "_Bathroom.png")} alt={item.name} />
            <img src={require("../assets/img/ships/Inside/" + item.name + "_Inside.png")} alt={item.name} />
            <img src={require("../assets/img/ships/Kitchen/" + item.name + "_Kitchen.png")} alt={item.name} />
            <img src={require("../assets/img/ships/Livingroom/" + item.name + "_Livingroom.png")} alt={item.name} />
          </div>
        </div>

        <div className="ship-price">
          <h1> prix</h1>
          <p>{item.price}€</p>
        </div>

        <div className="ship-foodOptions">
          <h1> Option repas premium</h1>
          <p>300€</p>
        </div>

        <div className="ship-EntertainmentOption">
          <h1> option divertissement</h1>
          <p>150€ (comprends l'acces a des films, jeux vidéos, espace d'entrainement...)</p>
        </div>
      </div>

      <div className="wrapper2">

        <div className="ship-description">
          <p>{item.description}</p>
        </div>

        <div className="ship-equipments">
          <h1> équipements</h1>
          <ul>
            <li> {item.equipment.bedroom} chambre(s) </li>
            <li> {item.equipment.bathroom} salle(s) de bain</li>
            <li>{item.equipment.livingroom} salon(s)</li>
          </ul>
        </div>

      </div>

    </div>

    <button >Réserver !</button>

    <div className="schedule">
      <div className="step">
        <img src={require("../assets/img/icons/earth.png")} alt="" />
        <p>
          Terre <br /> Notre point de départ.
        </p>
      </div>
      <div className="step">
        <img src={require("../assets/img/icons/constellation.png")} alt="" />
        <p>
          Un passage par les plus belles constellations de l'espace.
        </p>
      </div>
      <div className="step">
        <img src={require("../assets/img/icons/saturn.png")} alt="" />
        <p>
          Vous aurez l'occasion de voir de plus pres les anneaux de Saturne
        </p>
      </div>
      <div className="step">
        <img src={require("../assets/img/icons/base.png")} alt="" />
        <p>
          Le chemin se poursuit par la visite d'une station spatiale pour la collecte des données.
        </p>
      </div>
      <div className="step">
        <img src={require("../assets/img/icons/exoplanet.png")} alt="" />
        <p>
          Votre voyage s'achèvera en passant par une toute nouvelle exoplanète découverte : Kepler 22b.
        </p>
      </div>

    </div>

    <Footer />
    </>
  )
}

export default Item;