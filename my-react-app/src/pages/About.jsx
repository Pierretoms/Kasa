import React from 'react'
import './App.scss'
import Header from '../components/Header/Header.jsx';
import BannerAbout from '../components/Main/BannerAbout.jsx';
import Main from '../components/Main/Main.jsx';
import DropDown from '../components/Main/DropDown.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './About.scss'

function About() {
  return (
    <div>
        <Header />
        <Main>
          <BannerAbout />
          <div className='DropDown_container'>
            <DropDown titre='Fiabilité' contenu='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' />
            <DropDown titre='Respect' contenu='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
            <DropDown titre='Service' contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
            <DropDown titre='Sécurité' contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
          </div>
        </Main>
        <Footer />
    </div>
  )
}

export default About