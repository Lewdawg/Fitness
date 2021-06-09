const users = require('../models/users.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const fs = require('fs');

const register = async (req, res) => {
	try {
		const { confirmationKey } = await users.createOneUser({
			email: req.body.email,
			password: req.body.password,

			name: '',
			age: '',
			country: '',
			height: '',
			weight: '',
			gender: '',
			img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
			workouts: [],
		});

		const transport = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		/* const transport = nodemailer.createTransport({
			host: 'mail.coding-school.org',
			port: 465,
			auth: {
				user: 'workouttracker@coding-school.org',
				pass: 'T~GvT*65b78n',
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false,
			},
		}); */

		await transport.sendMail({
			from: process.env.MAIL_FROM,
			to: req.body.email,
			subject: 'account confirmation',
			html: `<div className='email' style='border: 1px solid black; padding: 20px; font-family: sans-serif; line-height: 2; font-size: 20px;' >
			<h2> Please click the following link to confirm Your account: </h2>
			<a href='http://localhost:3000/confirmAccount/${confirmationKey}'> Confirm Account </a>
			<p> All the best, Workout Tracker Team </p></div>`,
		});
		res.status(204).send();
	} catch (e) {
		res.status(400).send();
	}
};

const confirmAccount = async (req, res) => {
	try {
		await users.confirmOneUser(req.params.confirmationKey);
		res.status(204).send();
	} catch (e) {
		res.status(401).send();
	}
};

const login = async (req, res) => {
	try {
		/* tests */
		if (!req.body.email || !req.body.password)
			throw new Error('please provide credentials');
		const userFromDb = await users.readOneUser(req.body.email);
		if (userFromDb === null) throw new Error('user not found');
		if (!userFromDb.approved) throw new Error('user not approved');
		if (!(await bcrypt.compare(req.body.password, userFromDb.password)))
			throw new Error('wrong password');

		/* tests passed, create jwt */
		const token = await jwt.sign(
			{ email: userFromDb.email },
			process.env.JWT_SECRET,
			{ expiresIn: 3000 }
		);
		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 300000 /* 3000s in ms */,
			secure: true,
		});
		res.status(204).send();
	} catch (e) {
		res.status(401).send();
	}
};

const profile = async (req, res) => {
	try {
		const { name, age, country, height, weight, gender, img, workouts } =
			await users.readOneUser(res.locals.payload.email);
		res
			.status(200)
			.json({ name, age, country, height, weight, gender, img, workouts });
	} catch (e) {
		res.status(401).send();
	}
};

const updateProfile = async (req, res) => {
	try {
		const { email, name, age, country, height, weight, gender } = req.body;

		let newImg = (await users.readOneUser(email)).img;
		if (req.files !== null) {
			/* create new img reference */
			const imgFile = req.files.img;
			const rdmImgName = randomstring.generate();
			const imgExt = imgFile.name.split('.').pop();

			newImg = '/userimgs/' + rdmImgName + '.' + imgExt;

			/* remove old img reference */
			const { img: oldImg } = await users.readOneUser(email);
			if (oldImg) {
				if (fs.existsSync('./public' + oldImg)) {
					fs.unlinkSync('./public' + oldImg);
				}
			}

			imgFile.mv('./public/userimgs/' + rdmImgName + '.' + imgExt);
		}

		await users.updateOneUser({
			email,
			name,
			age,
			country,
			height,
			weight,
			gender,
			img: newImg,
		});
		res.status(204).send();
	} catch (e) {
		console.log(e);
		res.status(401).send(e);
	}
};

const updateUserWorkouts = async (req, res) => {
	try {
		const { email, finishedWorkout } = req.body;
		const { workouts: userWorkouts } = await users.readOneUser(email);

		/* find finished workout in user's workouts array */
		let foundWorkout = {};
		let foundWorkoutPosition = null;

		userWorkouts.find((userWorkout, index) => {
			if (userWorkout.title === finishedWorkout.title) {
				foundWorkout = userWorkout;
				foundWorkoutPosition = index;
				return true;
			}
		});

		foundWorkoutPosition === null
			? userWorkouts.push({ ...finishedWorkout, counter: 1 })
			: (userWorkouts[foundWorkoutPosition] = {
					...foundWorkout,
					counter: foundWorkout.counter + 1,
			  });

		await users.updateOneUserWorkouts({
			email,
			workouts: userWorkouts,
		});
		res.status(204).send();
	} catch (e) {
		console.log(e);
		res.status(401).send();
	}
};

const checkLoggedIn = async (req, res) => {
	try {
		res
			.status(200)
			.json({ loggedIn: true, username: res.locals.payload.email });
	} catch (e) {
		res.status(401).send(false);
	}
};

const logout = async (req, res) => {
	try {
		res.clearCookie('token').status(204).send();
	} catch (e) {
		res.status(400).send();
	}
};

const contact = async (req, res) => {
	try {
		/* const transport = nodemailer.createTransport({
			host: 'mail.coding-school.org',
			port: 465,
			auth: {
				user: 'workouttracker@coding-school.org',
				pass: 'T~GvT*65b78n',
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false,
			},
		}); */

		const transport = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		await transport.sendMail({
			from: req.body.email,
			to: 'ilja.romanov@yahoo.com',
			subject: 'contact',
			html: `<div className='email' style='border: 1px solid black; padding: 20px; font-family: sans-serif; line-height: 2; font-size: 20px;' >
			<h2> The following user has contacted you: ${req.body.name} </h2>
			<p>${req.body.message}</p>
			<p> All the best, Workout Tracker Team </p></div>`,
		});
		res.status(204).send();
	} catch (e) {
		res.status(400).send();
	}
};

module.exports = {
	register,
	confirmAccount,
	login,
	profile,
	updateProfile,
	updateUserWorkouts,
	checkLoggedIn,
	logout,
	contact,
};
