const {
    getWorkouts
} = require('../controllers/workouts.controllers.js');

const router = require('express').Router();

module.exports = () => {

    router.get('/api/workouts', getWorkouts);

    return router;
}

