import React from 'react'
import './AppartementsDetails.scss'

function AppartementsDetails({titre,location}) {
  return (
    <div className="appartements_flex">
        <div className='appartements_title'>
            <h1>{titre}</h1>
            <h2>{location}</h2>
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
        </div>
        <div className='appartements_host'>
            <div className="host_details">
                <h3><span>Alexandre</span> Dumas</h3>
                <div className="host_picture"></div>
            </div>
            <div className='rating_star'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
        </div>
    </div>
  )
}

export default AppartementsDetails