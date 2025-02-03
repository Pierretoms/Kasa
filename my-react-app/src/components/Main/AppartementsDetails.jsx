import React from 'react';
import './AppartementsDetails.scss';

function AppartementsDetails({ titre, location, hostpicture, hostname, rating, tags }) {
  return (
    <div className="appartements_flex">
      <div className="appartements_title">
        <h1>{titre}</h1>
        <h2>{location}</h2>
        {Array.isArray(tags) && tags.length > 0 && (
            <ul>
                {tags.map((item, index) => (
                    <li key={index}>{item}</li>
                 ))}
            </ul>
        )}
      </div>
      <div className="appartements_host">
        <div className="host_details">
          <h3>{hostname}</h3>
          <div className="host_picture">
            <img src={hostpicture} alt="photo du propriétaire" />
          </div>
        </div>
        <div className="rating_star">
          {[...Array(5)].map((_, index) => (
            <i 
              key={index} 
              className={`fa-solid fa-star ${index < rating ? 'star-red' : ''}`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartementsDetails;
