import React from 'react';
import Header from '../components/Header/Header.jsx';
import Banner from '../components/Main/Banner-accueil/Banner.jsx';
import GridCards from '../components/Main/Grid-cards/GridCards.jsx';
import Main from '../components/Main/Main.jsx'
import Footer from '../components/Footer/Footer.jsx';
import './App.scss';

function App() {
  return (
    <div>
        <Header />
        <Main>
          <Banner />
          <GridCards />
        </Main>
        <Footer />
    </div>
  );
}

export default App