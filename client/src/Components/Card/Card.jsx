import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, name, continent, ID }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Continent: {continent}</p>
      <Link to={`/detail/${ID}`}>Ver detalle</Link>
    </div>
  );
};

export default Card;