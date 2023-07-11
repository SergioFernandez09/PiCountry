const { Pais, Acti } = require('../db');
const axios = require("axios");


const createActivity = async (req, res) => {
    try {
      const { name, difficulty, duration, temporada, countries } = req.body;
  
      // Crear la actividad turística en la base de datos
      const activity = await Acti.create({
        name,
        difficulty,
        duration,
        temporada,
      });
  
      // Relacionar la actividad con los países indicados
      await activity.addPais(countries);
  
      res.status(201).json({ message: 'Activity created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating activity' });
    }
  };

  const getActivities = async () => {
    try {
      const activities = await Acti.findAll();
      return activities;
    } catch (error) {
      console.error(error);
      throw new Error('Error retrieving activities');
    }
  };
  
  module.exports = {
    createActivity,
    getActivities
  };