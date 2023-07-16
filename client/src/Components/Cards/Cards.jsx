import React from 'react';
import Card from '../Card/Card';

const Cards = ({countries}) => {
  
  if (!Array.isArray(countries)) {
    return <p>No se encontraron países</p>;
  }

  return (
    <div>
      {countries.map((country) => <Card key ={country.name} ID={country.ID} img={country.flags} name={country.name} continent={country.continents}></Card>)}
    </div>
  );
};

export default Cards;