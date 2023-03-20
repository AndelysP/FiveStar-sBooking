import React, { useEffect, useState } from 'react';
import '../assets/sass/item.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { useParams, useNavigate } from 'react-router';
import { Carousel } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { displayPrice } from '../helpers';
import { BsCalendarDate } from "react-icons/bs";
import { DatePicker } from 'antd';
import 'dayjs/locale/fr';
import locale from 'antd/es/date-picker/locale/fr_FR';

import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const Item = () => {

  const navigate = useNavigate();

  const { id } = useParams();// on utilise la destructuration pour recuperer l'id dynamique contenu dans l'url
  const [item, setItem] = useState();// données du JSON (un objet ship correspondant a l'ID recupéré)

  // State pour le calendrier antd
  const { RangePicker } = DatePicker;

  const [selectedRange, setSelectedRange] = useState([]);
  const [divertissement, setDivertissement] = useState(false);
  const [repas, setRepas] = useState(false);

  // console.log(repas);

  const handleSubmit = (e) => {

    e.preventDefault();
    // console.log(selectedRange, repas, divertissement)

    if (selectedRange[0] !== "" || selectedRange[1] !== "") {

      const startDate = selectedRange[0]; // Date de départ
      const endDate = selectedRange[1]; // Date de retour
      const diff = moment.duration(endDate.diff(startDate)).asDays(); // On calcule le temps en jour qui sépare ces deux dates
      const total = diff * item.price; // Multiplication du nombre de jours avec le prix de l'article

      // console.log(`Différence entre les deux dates sélectionnées: ${diff} jours.`);
      // console.log(`Le prix est de: ${total} €`);

      const data = {
        id: item._id,
        price: total,
        name: item.name,
        selectedRange,
        divertissement,
        repas
      };

      let storedCartData = localStorage.getItem("data");

      if (!storedCartData) {
        storedCartData = [];
      } else {
        storedCartData = JSON.parse(storedCartData);
      }

      storedCartData.push(data);

      localStorage.setItem("data", JSON.stringify(storedCartData));

      navigate("/cart");
    } else {
      toast.error('❌ Veuillez sélectionner vos dates');
    }

  }

  // console.log(selectedRange, repas, divertissement);

  const handleRangeChange = (value) => {
    setSelectedRange(value);
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
      <Navbar />

      <div className="header-item">
        <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
        <div className='title-wrapper'>
          <h1>{item.name}</h1>
        </div>
        <form action='' onSubmit={handleSubmit} className="form-options" >

          <div className='form-group'>
            <label htmlFor="start-date">Date d'arrivée / départ</label>

            <BsCalendarDate className='icon' size={20} />
            <RangePicker
              style={{ width: '100%' }}
              locale={locale}
              format="DD/MM/YYYY"
              onChange={(handleRangeChange)}
              placeholder={["Date d'arrivée", 'Date de retour']}
            />
          </div>

          <div className="form-group radio">
            <label htmlFor="repas">Repas premium</label>
            <input
              type="checkbox"
              name="repas"
              id=""
              checked={repas}
              onChange={(e) => setRepas(e.target.checked)}
            />
          </div>

          <div className="form-group radio">
            <label htmlFor="divertissement">Option divertissement</label>
            <input
              type="checkbox"
              name="divertissement"
              id=""
              checked={divertissement}
              onChange={(e) => setDivertissement(e.target.checked)}
            />
          </div>

          <button type="submit" className='submit'> Reserver </button>

        </form>
        <ToastContainer
        />
      </div>

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
              <p>{displayPrice(item.price)}</p>
            </div>

            <div className="ship-foodOptions">
              <h1> Option repas premium</h1>
              <p>{displayPrice(300)}</p>
            </div>

            <div className="ship-EntertainmentOption">
              <h1> Option divertissement</h1>
              <p>{displayPrice(150)} (comprends l'accès à des films, jeux vidéos, espace d'entrainement...)</p>
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