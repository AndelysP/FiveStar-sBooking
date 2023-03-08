import React, { useEffect, useState } from 'react';
import '../assets/sass/item.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const Item = () => {

  const { id } = useParams(); // on utilise la destructuration pour recuperer l'id dynamique contenu dans l'url

  const API = `http://localhost:5500/ships/${id}`; // adresse de l'api avec l'id envoyé par la page home
  const [data, setData] = useState({}); // données du JSON (un objet ship correspondant a l'ID recupéré)
  const [pageLoading, setpageLoading] = useState(true);

  const getItem = async () => {
    await fetch(`${API}`)
      .then(res => res.json()).then(json => setData(json), setpageLoading(false))
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    getItem()
  }, []);

  console.log(data);
  console.log(pageLoading);

  if (pageLoading) {
    return (
       <div>
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <h1>Page en cours de chargement</h1>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <img id='cover-pic' src={require("../assets/img/ships/Ship/" + data.name + "_Ship.png")} alt={data.name} />

      <Footer />
    </div>
    )

  }

  return (
    <div>
    <div className="navbar-wrapper">
      <Navbar />
    </div>

    <div className="cover">
      <img id='cover-pic' src={require("../assets/img/ships/Ship/" + data.name + "_Ship.png")} alt={data.name} />
      <h1>{data.name}</h1>
    </div>

    {/* formulaire filtre a ajouter ici */}

    <div className="ship-details">

      <div className="ship-pictures">
        <div className="main-pic">
          <img src={require("../assets/img/ships/Ship/" + data.name + "_Ship.png")} alt="ship" />
        </div>
        <div className="rooms-pic">
          <img src={require("../assets/img/ships/Bedroom/" + data.name + "_bedroom.png")} alt="bedroom" />
          <img src={require("../assets/img/ships/Bathroom/" + data.name + "_bathroom.png")} alt="bathroom" />
          <img src={require("../assets/img/ships/Kitchen/" + data.name + "_kitchen.png")} alt="kitchen" />
        </div>
      </div>

    </div>

    <div className="ship-description">
      <p>{data.description}</p>
    </div>

    <Footer />
  </div>
  )
}

export default Item