import React from 'react'
import './Header.scss';

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <img src="logo_kasa.png" alt="Logo Kasa" />
        </div>
        <ul>
          <li><a href='#' className='acceuil'>Accueil </a></li>
          <li><a href='#' className='apropos'>À propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header