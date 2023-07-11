const {
    getCountries,
    getCountryById,
    getCountriesByName
} = require('../controllers/countriesController')

const getCountriesHandler = async (req, res) => {
    try {
      const countries = await getCountries(); 
      res.json(countries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getCountryByIdHandler = async (req, res) => {
    const { idPais } = req.params;
  
    try {
      const country = await getCountryById(idPais); 
      res.json(country);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  const getCountriesByNameHandler = async (req, res) => {
    const { name } = req.query;
  
    try {
      const countries = await getCountriesByName(name); 
      res.json(countries);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  module.exports = {
getCountriesHandler,
getCountryByIdHandler,
getCountriesByNameHandler
};