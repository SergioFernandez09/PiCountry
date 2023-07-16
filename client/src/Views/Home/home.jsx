import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, getCountryById } from '../../Redux/Actions';
import Cards from '../../Components/Cards/Cards'
import SearchBar from '../../Components/SearchBar/SearchBar'

const home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCountries());
  }, []);
  
  
  return (
    <div>
        <SearchBar/>
        <Cards countries={countries}></Cards>
    </div>
  )
}


export default home