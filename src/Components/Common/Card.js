// src/Components/Card.js
import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
      <img src={image} alt="Skill" className="w-30 h-20 object-contain" />
    </div>
  );
};

export default Card;
