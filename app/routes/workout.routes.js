const { getWorkouts } = require('../controllers/workout.controller.js')

const router = require('express').Router();


router.get('/api/workouts', getWorkouts);


module.exports = router;
