import React from 'react';
import './DropDown.scss';

function DropDown({ titre, contenu }) {
  return (
    <div className='appartements_description'>
      <div className="appartements_description_header">
        <h4>{titre}</h4>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      <div className="appartements_description_contenu">
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
