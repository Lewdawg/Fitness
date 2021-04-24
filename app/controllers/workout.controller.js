const workoutSchema = require('../model/workout.model.js')


const getWorkouts = async (req, res) => {

    try { res.status(200).send(await workoutSchema.getWorkouts()) }

    catch (error) { res.status(404).send(error.message) }
}


module.exports = {
    getWorkouts,
}