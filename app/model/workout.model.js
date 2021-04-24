const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
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