import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/home.scss';
import Navbar from './Navbar';
import planetIllu from '../assets/img/icons/planet_design.png';
import { BsCalendarDate, BsCurrencyEuro } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

import { DatePicker, Input, } from 'antd';
import 'dayjs/locale/fr';
import locale from 'antd/es/date-picker/locale/fr_FR';

const Home = () => {

  const API = "http://localhost:5500/ships";
  const [data, setData] = useState([]); // données du JSON
  const [capacity, setCapacity] = useState(""); // state pour choisir la capacité du vaisseau
  const [price, setPrice] = useState(""); // state pour choisir le prix 

  // State pour le calendrier antd
  const { RangePicker } = DatePicker;
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  useEffect(() => {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Permet de renvoyer l'utilisateur à la catégorie "Réservations" une fois qu'il a validé sa recherche
  const reservationRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    reservationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const filteredData = data.filter((ship) => {
    // Vérifie si les valeurs de filtrage sont définies
    const capacityFilter = capacity ? ship.capacity >= capacity : true;
    const priceFilter = price ? ship.price <= price : true;

    // Renvoie true si toutes les conditions sont remplies
    return capacityFilter && priceFilter;
  });

  return (
    <>
      <Navbar />

      <div className="header">
        <div className='banner'>

          <div className="banner-title">
            <h1>Five Star's Booking</h1>
          </div>
          <div className="banner-subtitle">
            <h2>Embarquez pour un voyage 5 étoiles ! </h2>
          </div>
        </div>

        <form action='' className="form" onSubmit={handleSubmit} >

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

          {/* <div className='form-group'>
            <label htmlFor="start-date">Arrivée</label>

            <BsCalendarDate className='icon' size={20} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              placeholderText="Sélectionnez une date d'arrivée"
              locale={fr}
            />
          </div>

          <div className='form-group'>
            <label htmlFor="end-date">Retour</label>

            <BsCalendarDate className='icon' size={20} />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              placeholderText="Sélectionnez une date de retour"
              locale={fr}
            />
          </div> */}

          <div className='form-group'>
            <label htmlFor="capacity">Passagers</label>

            <MdPeople className='icon' size={20} />
            <Input
              placeholder='Nombre de personnes...'
              type="number"
              name="capacity"
              value={capacity}
              onChange={(e) =>
                e.target.value < 0 || isNaN(e.target.value)
                  ? setCapacity("") // Pour améliorer l'exp utilisateur et empêcher de renseigner des valeurs négatives 
                  : setCapacity(e.target.value)
              }
            />
          </div>

          <div className='form-group'>
            <label htmlFor="price">Prix</label>

            <BsCurrencyEuro className='icon' size={20} />
            <Input
              placeholder='Prix...'
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />


          </div>

          <input type="submit" value="C'est parti !" className='submit' />

        </form>

      </div>

      <div className='main'>

        <div id="about">
          <div className="title">
            <h1>A propos de nous</h1>
          </div>

          <div className="about-body">
            <div className="about-text">
              <p>Five Star's Booking est une entreprise de tourisme spatial innovante qui se concentre sur l'organisation de voyages dans l'espace pour les passionés d'aventure et de découverte. En plus d'offrir une expérience de voyage unique, l'entreprise a pour objectif de contribuer à la recherche scientifique en permettant aux passagers de participer à des expérienes inoubliables en vol et de collecter des données précieuses pour la science. </p>
              <p>Les voyages spatiaux comprennent des itinéraires variés qui peuvent inclure des visites à des stations spatiales, des séjours en orbite autour de la Terre ou même des voyages interplanétaires. Les passagers peuvent profiter d'un séjour de luxe à bord de navettes spatiales de pointe, avec des équipements haut de gamme et une équipe de professionnels pour les accompagner à chaque étape du voyage.</p>
              <p>En plus de proposer des voyages spatiaux exceptionnels, Five Star's Booking s'engage également à promouvoir la durabilité et la protection de l'environnement spatial, en mettant en place des pratiques éco-responsables dans toutes ses activités. Avec sa mission de tourisme spatial responsable et sa volonté de contribuer à la recherche scientifique, Five Star's Booking est une entreprise qui ouvre de nouvelles perspectives pour l'exploration spatiale.</p>
            </div>

            <div className="about-image">
              <img src={planetIllu} alt="" />
            </div>
          </div>
        </div>

        <div id="reservations" ref={reservationRef}>
          <div className="title">
            <h1>Réservations</h1>
          </div>
          <div className="subtitle">
            <h2>Trouvez votre prochain vol</h2>
          </div>


          {filteredData.length === 0 ? (
            <p className='shipList-error'>Oups ! Aucun résultat ne correspond à votre recherche</p>
          ) : (
            <div className="shipList">
              {filteredData.map((ship, index) => (
                <div className="card" key={index}>
                  <div className="img-cover">
                    <img src={require("../assets/img/ships/Ship/" + ship.name + "_Ship.png")} alt={ship.name} />
                  </div>
                  <div className="card-text">
                    <h3>{ship.name}</h3>
                    <p>{ship.description.substr(0, 300)}...</p>
                    <div className="card-text-footer">
                      <p>Prix: {ship.price} € / nuit</p>
                      <Link to={`/item/${ship._id}`}><button>Réserver !</button></Link> 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <ContactForm /> {/* Appel au formulaire de contact */}

      </div>

      <Footer />
    </>
  )
}

export default Home