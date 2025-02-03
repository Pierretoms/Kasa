import React from 'react'
import './BannerAppartements.scss'

function BannerAppartements() {
  return (
    <div className='banner_appartements'>
        <img className="carrousel"src='https://picsum.photos/200/300?random=1' alt='' />
        <img className="arrow arrow_left" src="/arrow_left.png" alt="flèche slide gauche" />
			  <img className="arrow arrow_right" src="/arrow_right.png" alt="flèche slide droite" />
    </div>
  )
}

export default BannerAppartements