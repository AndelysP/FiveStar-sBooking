import React, { useEffect, useState } from 'react';
import '../assets/sass/item.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import { Carousel } from 'antd';

import { BsCalendarDate } from "react-icons/bs";
import { DatePicker, Input, } from 'antd';
import 'dayjs/locale/fr';
import locale from 'antd/es/date-picker/locale/fr_FR';

const Item = () => {

  const { id } = useParams();// on utilise la destructuration pour recuperer l'id dynamique contenu dans l'url
  const [item, setItem] = useState();// données du JSON (un objet ship correspondant a l'ID recupéré)

  // State pour le calendrier antd
  const { RangePicker } = DatePicker;
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  // On récupère l'id de l'item cliqué 
  const getItem = async () => {
    await fetch(`http://localhost:5500/ships/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => {
        console.log(error);
      });
  }
  console.log(item);

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
        <div className='title-wrapper'>
          <h1>{item.name}</h1>
        </div>
      </div>

      {/* formulaire filtre a ajouter ici */}
      <form action='' className="form" >

        <div className='form-group'>
          <label htmlFor="start-date">Date d'arrivée / départ</label>

          <BsCalendarDate className='icon' size={20} />
          <RangePicker
            style={{ width: '100%' }}
            locale={locale}
            format="DD/MM/YYYY"
            onChange={handleRangeChange}
            placeholder={["Date d'arrivée", 'Date de retour']}
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="repas">Repas premium</label>
          <input type="radio" name="repas" id="" />
        </div>

        <div className="form-group radio">
          <label htmlFor="divertissement">Option divertissement</label>
          <input type="radio" name="divertissement" id="" />
        </div>

      </form>

      <div className="ship">
        {/* pour gerer avec propriété order des flex items il faut enlever les wrapper et laisse 4 flex items en mode desktop, mettre 50% pour la taille d'un item pour que ca se mette naturellement en 2 colones puis passer le container 2 en order 1 pour qu'il passe en dernier */}

        <div className="wrapper">
          {/* utilisation du composant carroussel antD */}
          <Carousel
            className="ship-pictures"
            autoplay
            slidesToShow={1}
          >
            <div className='caroussel'>
              <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
            </div>
            <div className='caroussel'>
              <img src={require("../assets/img/ships/Bedroom/" + item.name + "_Bedroom.png")} alt={item.name} />
            </div>
            <div className='caroussel'>
              <img src={require("../assets/img/ships/Bathroom/" + item.name + "_Bathroom.png")} alt={item.name} />
            </div>
            <div className='caroussel'>
              <img src={require("../assets/img/ships/Inside/" + item.name + "_Inside.png")} alt={item.name} />
            </div>
            <div className='caroussel'>
              <img src={require("../assets/img/ships/Kitchen/" + item.name + "_Kitchen.png")} alt={item.name} />
            </div>
            <div className='caroussel'>
              <img src={require("../assets/img/ships/Livingroom/" + item.name + "_Livingroom.png")} alt={item.name} />
            </div>
          </Carousel>

          <div className="ship-details">

            <div className="ship-price">
              <h1> Prix</h1>
              <p>{item.price}€</p>
            </div>

            <div className="ship-foodOptions">
              <h1> Option repas premium</h1>
              <p>300€</p>
            </div>

            <div className="ship-EntertainmentOption">
              <h1> Option divertissement</h1>
              <p>150€ (comprends l'accès à des films, jeux vidéos, espace d'entrainement...)</p>
            </div>
          </div>

        </div>

        <div className="wrapper">
          <div className="ship-description">
            <p>{item.description}</p>
          </div>

          <div className="ship-equipments">
            <h1> Equipements</h1>
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