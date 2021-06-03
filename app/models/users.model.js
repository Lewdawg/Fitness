const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	approved: {
		type: Boolean,
		required: true,
	},
	name: {
		type: String,
	},
	age: {
		type: String,
	},
	country: {
		type: String,
	},
	height: {
		type: String,
	},
	weight: {
		type: String,
	},
	gender: {
		type: String,
	},
	img: {
		type: String,
	},
	workouts: {
		type: Array,
	},
});

userSchema.pre('save', async function (next) {
	const user = this;

	/* hash password from register input */
	if (user.isModified('password'))
		user.password = await bcrypt.hash(user.password, 12);

	/* set approved property to false for security */
	user.approved = true;

	next();
});

const User = mongoose.connection.model('users', userSchema);

const createOneUser = async ({
	email,
	password,
	approved,

	name,
	age,
	country,
	height,
	weight,
	gender,
	img,
	workouts,
}) =>
	await new User({
		email,
		password,
		approved,

		name,
		age,
		country,
		height,
		weight,
		gender,
		img,
		workouts,
	}).save();

const readOneUser = async (email) => await User.findOne({ email });

const readAllUsers = async () => await User.find({});

const updateOneUser = async ({
	email,
	name,
	age,
	country,
	height,
	weight,
	gender,
	img
}) =>
	await User.updateOne(
		{ email },
		{ name, age, country, height, weight, gender, img }
	);

const updateOneUserWorkouts = async ({
	email,
	workouts
}) =>
	await User.updateOne(
		{ email },
		{ workouts }
	);

module.exports = {
	createOneUser,
	readOneUser,
	updateOneUser,
	readAllUsers,
	updateOneUserWorkouts
};