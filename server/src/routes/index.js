const { Router } = require('express');
const { 
    getCountriesHandler, 
    getCountryByIdHandler,
    getCountriesByNameHandler,
 } = require('../handlers/countryHandler')
 const{ postActivityHandler, getActivitiesHandler } = require('../handlers/ActivityHandler');


const router = Router();

// // Rutas para países
router.get('/countries', getCountriesHandler);
router.get('/countries/name', getCountriesByNameHandler);
router.get('/countries/:idPais', getCountryByIdHandler);

// // Rutas para actividades
router.post('/activities', postActivityHandler );
router.get('/activities', getActivitiesHandler );

module.exports = router;

