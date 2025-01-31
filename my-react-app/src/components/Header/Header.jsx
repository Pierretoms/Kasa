import React from 'react'
import './Header.scss';
import { NavLink } from 'react-router';

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <img src="/logo_kasa.png" alt="Logo Kasa" />
        </div>
        <ul>
          <li><NavLink to={'/'}>Accueil</NavLink></li>
          <li><NavLink to={'/about'}>À propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header