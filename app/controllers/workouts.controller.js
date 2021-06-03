const workouts = require("../models/workouts.model.js");

const getWorkouts = async (req, res) => {
    try {res.status(200).send(await workouts.getWorkouts())}
    catch (error) { res.status(404).send() }
}

module.exports = {
    getWorkouts
};


