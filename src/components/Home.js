import React, { useEffect, useState } from 'react';
import '../assets/sass/home.scss';
import Navbar from './Navbar';


const Home = () => {

  const API = "http://localhost:5500/ships";
  const [data, setData] = useState([]);
  const [capacity, setCapacity] = useState("");

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

          <label htmlFor="capacity">Nombre de personnes:</label>
          <input
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
      </div>

      <div className='main'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum vel nesciunt. Maiores soluta odio fugiat recusandae repellat, provident odit placeat fuga laborum inventore exercitationem. Officia in voluptatem expedita minima?</p>
        <ul>
          {data
            .filter((ship) => ship.capacity >= capacity)
            .map((ship) => (
              <li key={ship.id}>{ship.name}</li>
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