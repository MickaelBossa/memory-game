// Librairies
import React from 'react';
import './SingleCard.css';

export default function SingleCard({ name, card, link, choiceHandler, clicked, found, matched }) {

  // Fonctions
  const cardClickHandler = () => {
    if(!found) { 
    choiceHandler(card)
    }
  }

  return (
    <div className='Card' onClick={cardClickHandler} >
      {clicked ? 
      <img className={matched ? 'imgFound' : ''} src={link} alt={name} />
      : null}
    </div>  
  );
}
