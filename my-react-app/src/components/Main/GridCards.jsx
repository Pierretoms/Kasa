import React from 'react'
import './GridCards.scss'
import Cards from './Cards.jsx'
import data from '../../back-end.json'
import { NavLink } from 'react-router';

function GridCards() {
  return (
    <div className='grid-cards'>
      {data && data.map((logement) => {
        return(<div key={logement.id}><Cards titre={logement.title} cover={logement.cover} /></div>)
      })}
    </div>
  )
}

export default GridCards