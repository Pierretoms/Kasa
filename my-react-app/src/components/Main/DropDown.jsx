import React from 'react'
import './DropDown.scss'

function DropDown({titre,contenu}) {
  return (
    <div className='appartements_description'>
        <div className="appartements_description_header">
            <h4>{titre}</h4>
            <i className="fa-solid fa-angle-down"></i>
            </div>
        <p>
            {contenu}
        </p>
    </div>
  )
}

export default DropDown