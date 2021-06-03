const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	instructions: {
		type: Array,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
});

const Exercise = mongoose.connection.model('exercise', exerciseSchema);

async function getExercises() {
	return await Exercise.find({});
}

module.exports = {
	getExercises,
};
