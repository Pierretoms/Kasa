import React from 'react'
import './Oups.scss'
import { NavLink } from 'react-router'

function Oups() {
  return (
    <div className='oups_container'>
      <h1>404</h1>
      <h2><span>Oups! La page que</span> vous demandez n'existe pas.</h2>
      <p><NavLink to={'/'}>Retourner sur la page d'accueil</NavLink></p>
    </div>
  )
}

export default Oups