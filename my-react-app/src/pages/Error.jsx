import React from 'react'
import './App.scss'
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx'
import Footer from '../components/Footer/Footer.jsx';
import Oups from '../components/Main/Oups.jsx';

function Error() {
  return (
    <div>
        <Header />
        <Main>
          <Oups />
        </Main>
        <Footer />
    </div>
  )
}

export default Error