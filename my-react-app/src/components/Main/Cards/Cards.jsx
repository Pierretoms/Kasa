import React from 'react'
import './Cards.scss'

function Cards({titre,cover}) {
  return (
    <div className='cards'>
      <img src={cover}></img>
      <h2>{titre}</h2>
    </div>
  )
}

export default Cards