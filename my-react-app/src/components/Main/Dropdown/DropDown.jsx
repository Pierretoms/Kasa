import React, { useState } from 'react';
import './DropDown.scss';

function DropDown({ titre, contenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='appartements_description'>
      <div className="appartements_description_header">
        <h4>{titre}</h4>
        <i 
          className={`fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`} 
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
      <div className={`appartements_description_contenu ${isOpen ? 'open' : ''}`}>
        {Array.isArray(contenu) ? (
          <ul>
            {contenu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{contenu}</p>
        )}
      </div>
    </div>
  );
}

export default DropDown;
