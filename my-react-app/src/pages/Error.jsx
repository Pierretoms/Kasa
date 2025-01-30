import React from 'react'
import './App.scss'
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx'
import Footer from '../components/Footer/Footer.jsx';

function Error() {
  return (
    <div>
        <Header />
        <Main>
          error
        </Main>
        <Footer />
    </div>
  )
}

export default Error