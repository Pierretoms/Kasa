import React, { useState } from 'react';
import './BannerAppartements.scss';

function BannerAppartements({ carrousel }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = carrousel.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  if (totalImages === 1) {
    return (
      <div className='banner_appartements'>
        <img className='carrousel' src={carrousel[0]} alt='Logement' />
      </div>
    );
  }

  return (
    <div className='banner_appartements'>
      <img className='carrousel' src={carrousel[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <img 
        className='arrow arrow_left' 
        src='/arrow_left.png' 
        alt='Flèche slide gauche' 
        onClick={goToPrevious} 
      />
      <img 
        className='arrow arrow_right' 
        src='/arrow_right.png' 
        alt='Flèche slide droite' 
        onClick={goToNext} 
      />
      <div className='counter'>{`${currentIndex + 1} / ${totalImages}`}</div>
    </div>
  );
}

export default BannerAppartements