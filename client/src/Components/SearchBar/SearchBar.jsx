import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../../Redux/Actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  


  useEffect(() => {
    if (searchQuery) {
      dispatch(getCountriesByName(searchQuery));
    }
  }, [searchQuery, dispatch]);
  

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };



  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Buscar por nombre"
        className="search-input"
      />
      
    </div>
  );
};

export default SearchBar;
