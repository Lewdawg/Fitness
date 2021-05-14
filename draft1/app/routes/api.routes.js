const {
    getWorkouts
} = require('../controllers/workouts.controller.js');

const router = require('express').Router();

module.exports = () => {

    router.get('/workouts', getWorkouts);

    return router;
}

