import axios from 'axios';
import {  GET_ACTIVITIES, ADD_ACTIVITY, GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRIES_BY_NAME } from "./actions-types";


export const getCountries = () => {
    return async (dispatch) => {
      try {
        
        const response = await fetch('http://localhost:3001/countries');
        const countries = await response.json();
  

        const formattedCountries = countries.map((country) => ({
        ID: country.ID,
        flags: country.flags,
        name: country.name,
        continents: country.continents,
        }));
  
        dispatch({
          type: GET_COUNTRIES,
          payload: formattedCountries,
        });
      } catch (error) {
        
        console.error('Error al obtener los países:', error);
      }
    };
  };

  export const getCountryById = (countryId) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${countryId}`);
      const country = response.data;
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: country,
      });
    } catch (error) {
      console.error('Error al obtener los países por ID:',error);
    }
};

export const getCountriesByName = (name) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/countries/name?name=${name}`);
        const countries = await response.json();
  
        dispatch({
          type: GET_COUNTRIES_BY_NAME,
          payload: countries,
        });
      } catch (error) {
        console.error('Error al obtener los países por nombre:', error);
      }
    };
  };