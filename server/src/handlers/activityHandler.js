const { createActivity, getActivities } = require('../controllers/activitiesController')

const postActivityHandler = async (req, res) => {
    try {
      await createActivity(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error handling activity request' });
    }
  };
  
  const getActivitiesHandler = async (req, res) => {
    try {
      const activities = await getActivities();
  
      res.json(activities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };


  module.exports = {
    postActivityHandler,
    getActivitiesHandler,
  };