import React from 'react'
import './App.scss'
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx'
import Footer from '../components/Footer/Footer.jsx';
import DropDown from '../components/Main/DropDown.jsx';
import BannerAppartements from '../components/Main/BannerAppartements.jsx';
import AppartementsDetails from '../components/Main/AppartementsDetails.jsx';
import './Appartements.scss'
import data from '../back-end.json'
import { useParams } from "react-router-dom";

function Appartements() {

  const { id } = useParams();
  const logement = data.find((el) => el.id.toString() === id);

  return (
    <div>
        <Header />
        <Main>
          <div className='appartements_page'>
            <BannerAppartements />
            <AppartementsDetails titre={logement.title} hostpicture={logement.host.picture} tags={logement.tags} hostname={logement.host.name} location={logement.location} rating={logement.rating} description={logement.description} equipement={logement.equipments} />
            <div className="description_equipement">
              <DropDown titre='Description' contenu={logement.description} />
              <DropDown titre='Equipements' contenu={logement.equipments} />
            </div>
          </div>
        </Main>
        <Footer />
    </div>
  )
}

export default Appartements