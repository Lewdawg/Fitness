const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true
    },
    targetArea: {
        type: String,
        required: true
    },
    exercises: {
        type: Array,
        required: true
    },
    rounds: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
})

const Workout = mongoose.connection.model('workouts', workoutSchema);

module.exports = Workout;

// module.exports = {
//     
// }