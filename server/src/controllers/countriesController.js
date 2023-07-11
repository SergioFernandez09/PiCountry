const { Pais, Acti } = require('../db');
const axios = require("axios");
const { Op } = require('sequelize');

// Función para obtener los países de la API y estructurarlos para guardarlos en la base de datos
async function getCountriesFromAPI() {
    try {
      const response = await axios.get("http://localhost:5000/countries");
      const paises = response.data;
  
      // Estructurar los países para guardar solo la información necesaria en la base de datos
      const countriesToSave = paises.map((country) => {
        return {
          ID: country.cca3,
          name: country.name.common,
          flags: country.flags.png,
          continents: country.continents,
          capital: country.capital && country.capital.length > 0 ? country.capital[0] : 'No Exist Capital',
          subregion: country.subregion,
          area: country.area,
          population: country.population
        };
      });
  
      
      const count = await Pais.count(); 
      const isNewInsertion = count === 0;

      isNewInsertion ? await Pais.bulkCreate(countriesToSave) &&
       console.log("Countries saved to database successfully") : 
       console.log("Countries already exist in the database. Skipping insertion.");
      
    } catch (error) {
      console.error("Error retrieving countries from API:", error);
    }
  }
  
  getCountriesFromAPI();


// Controlador para GET /countries
const getCountries = async (req, res) => {
    try {
      const countries = await Pais.findAll({
        model: Acti,
      });
      return countries;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving countries' });
    }
  };

  const getCountryById = async (idPais) => {
    try {
      const country = await Pais.findOne({
        where: { ID: idPais },
        include: {
            model: Acti,
            through: { attributes: [] }, 
          },
      });
  
      if (!country) {
        throw new Error('Country not found');
      }
  
      const countryWithActivities = {
        ...country.toJSON(),
        actividades: country.Actis.map((actividad) => actividad.toJSON()),
      };
      
      delete countryWithActivities.Actis; // Eliminamos la propiedad "Actis" duplicada

      return countryWithActivities;
    } catch (error) {
      console.error(error);
      throw new Error('Error retrieving country details');
    }
  };

  const getCountriesByName = async (name) => {
    try {
      const countries = await Pais.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%` 
          }
        }
      });
  
      if (countries.length === 0) {
        throw new Error('No countries found');
      }
  
      return countries;
    } catch (error) {
      console.error(error);
      throw new Error('Error retrieving countries by name');
    }
  };

  module.exports = {
    getCountries,
    getCountryById,
    getCountriesByName
  }