const exercises = require("../models/exercises.model.js");

const getExercises = async (req, res) => {
    try {res.status(200).send(await exercises.getExercises())}
    catch (error) { res.status(404).send() }
}

module.exports = {
    getExercises
};


