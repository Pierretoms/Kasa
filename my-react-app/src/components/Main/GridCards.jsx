import React from 'react'
import './GridCards.scss'
import Cards from './Cards.jsx'

function GridCards() {
  return (
    <div className='grid-cards'>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default GridCards