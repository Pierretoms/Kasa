import React from 'react'
import './App.scss'
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx'
import Footer from '../components/Footer/Footer.jsx';
import DropDown from '../components/Main/DropDown.jsx';
import AppartementsDetails from '../components/Main/AppartementsDetails.jsx';
import './Appartements.scss'

function Appartements() {
  return (
    <div>
        <Header />
        <Main>
          <div className='appartements_page'>
            <div>
              <img src='https://picsum.photos/200/300?random=1' alt='' />
            </div>
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