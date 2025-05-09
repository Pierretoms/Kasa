import React from 'react'
import './GridCards.scss'
import Cards from '../Cards/Cards.jsx'
import data from '../../../back-end.json'
import { Link } from 'react-router-dom'

function GridCards() {
  return (
    <div className='grid-cards'>
      {data && data.map((logement) => (
        <Link to={`/appartements/${logement.id}`} key={logement.id} className='cards-link'>
          <Cards titre={logement.title} cover={logement.cover} />
        </Link>
      ))}
    </div>
  )
}

export default GridCards