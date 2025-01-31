import React from 'react'
import './App.scss'
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx'
import Footer from '../components/Footer/Footer.jsx';
import DropDown from '../components/Main/DropDown.jsx';
import BannerAppartements from '../components/Main/BannerAppartements.jsx';
import AppartementsDetails from '../components/Main/AppartementsDetails.jsx';
import './Appartements.scss'

function Appartements() {
  return (
    <div>
        <Header />
        <Main>
          <div className='appartements_page'>
            <BannerAppartements />
            <AppartementsDetails />
            <div className="description_equipement">
              <DropDown titre='Description' />
              <DropDown titre='Equipements' />
            </div>
          </div>
        </Main>
        <Footer />
    </div>
  )
}

export default Appartements