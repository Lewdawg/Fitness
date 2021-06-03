const { getWorkouts } = require('../controllers/workouts.controller.js');
const { getExercises } = require('../controllers/exercises.controller.js');
const { register, login, profile, updateProfile } = require('../controllers/users.controller.js');
const checkToken = require('../middleware/checkToken.middleware.js');

const router = require('express').Router();

module.exports = () => {
	router.get('/workouts', getWorkouts);
	router.get('/exercises', getExercises);
	router.post('/register', register);
	router.post('/login', login);
	router.post('/profile', checkToken, profile);
	router.post('/updateProfile', checkToken, updateProfile);

	return router;
};
