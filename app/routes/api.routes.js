const { getWorkouts } = require('../controllers/workouts.controller.js');
const { getExercises } = require('../controllers/exercises.controller.js');
const {
	register,
	confirmAccount,
	login,
	checkLoggedIn,
	logout,
	profile,
	updateProfile,
	updateUserWorkouts,
	contact
} = require('../controllers/users.controller.js');
const checkToken = require('../middleware/checkToken.middleware.js');

const router = require('express').Router();

module.exports = () => {
	router.get('/workouts', getWorkouts);
	router.get('/exercises', getExercises);
	router.post('/register', register);
	router.get('/confirmAccount/:confirmationKey', confirmAccount);
	router.post('/login', login);
	router.post('/profile', checkToken, profile);
	router.post('/updateProfile', checkToken, updateProfile);
	router.post('/updateWorkouts', checkToken, updateUserWorkouts);
	router.get('/checkLoggedIn', checkToken, checkLoggedIn);
	router.post('/logout', checkToken, logout);
	router.post('/contact', contact);

	return router;
};
