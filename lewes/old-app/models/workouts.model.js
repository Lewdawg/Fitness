const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
});

const Workout = mongoose.connection.model("workouts", workoutSchema);

async function getWorkouts(){ return await Workout.find({}) };

module.exports = {
   getWorkouts
};
