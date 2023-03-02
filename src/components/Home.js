import React, { useEffect, useState } from 'react';
import '../assets/sass/home.scss';
import Navbar from './Navbar';
// Import librairie react pour gérer le calendrier
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// Import pour la traduction du calendrier 
import fr from 'date-fns/locale/fr';

const Home = () => {

  const API = "http://localhost:5500/ships";
  const [data, setData] = useState([]); // données du JSON
  const [capacity, setCapacity] = useState(""); // state pour choisir la capacité du vaisseau
  const [price, setPrice] = useState(""); // state pour choisir le prix 
  const [startDate, setStartDate] = useState(null); // state pour la date d'arrivée
  const [endDate, setEndDate] = useState(null); // state pour la date de départ

  const filteredData = data.filter(
    (ship) =>
      ship.capacity >= capacity &&
      ship.price >= price
  );

  useEffect(() => {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log(error);
      });
  }, []);

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

        <div className="form">

          <div className='form-group'>
            <label htmlFor="start-date">Arrivée</label>
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
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              placeholderText="Sélectionnez une date de retour"
              locale={fr}
            />
          </div>


          <div className='form-group'>
            <label htmlFor="capacity">Passagers</label>
            <input
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

          <div>
            <label htmlFor="price">Prix</label>
            <input
              placeholder='Prix...'
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <input type="submit" value="C'est partit !" className='submit' />

        </div>

      </div>

      <div className='main'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum vel nesciunt. Maiores soluta odio fugiat recusandae repellat, provident odit placeat fuga laborum inventore exercitationem. Officia in voluptatem expedita minima?</p>
        <ul>
          {filteredData.map((ship, index) => (
            <li key={index}>
              <p>{ship.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="ship-list">
        {data.map((item, index) => {
          // const pictureName = item.name + '_bathroom.png';
          // const picturePath = '../assets/img/ships/' + pictureName;
          
          return (
            <div className="ship-card" key={index}>
              <img src={require("../assets/img/ships/Ship/" + item.name + "_Ship.png")} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h3>Prix : {item.price} €</h3>
            </div>
          );
        })}
      </div> */}
    </>
  )
}

export default Home