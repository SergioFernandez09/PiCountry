import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountryById } from '../../Redux/Actions';

const Detail = () => {
  const { countryId } = useParams();
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryById(countryId));
  }, [dispatch, countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flags} alt="Flag" />
      <p>Continent: {country.continents}</p>
      <p>Capital: {country.capital}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
      <h3>Actividades</h3>
      <ul>
        {country.actividades.map((actividad) => (
          <li key={actividad.ID}>
            <p>Name: {actividad.name}</p>
            <p>Difficulty: {actividad.difficulty}</p>
            <p>Duration: {actividad.duration}</p>
            <p>Temporada: {actividad.temporada}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
