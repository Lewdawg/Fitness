const users = require('../models/users.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
	try {
		await users.createOneUser({
			email: req.body.email,
			password: req.body.password,
			approved: req.body.approved,

			name: '',
			age: '',
			country: '',
			height: '',
			weight: '',
			gender: '',
		});
		res.status(204).send();
	} catch (e) {
		res.status(400).send();
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
			{ expiresIn: 30 }
		);
		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 30000 /* 30s in ms */,
		});
		res.status(204).send();
	} catch (e) {
		res.status(401).send();
	}
};

const profile = async (req, res) => {
	try {
		const { name, age, country, height, weight, gender } =
			await users.readOneUser(req.body.username);
		res.status(200).json({ name, age, country, height, weight, gender });
		/* .json({ ...(await users.readOneUser(req.body.username)), email: '', password:'', custom:'test' }); */
	} catch (e) {
		res.status(401).send();
	}
};

const updateProfile = async (req, res) => {
	try {
		const { email, name, age, country, height, weight, gender } = req.body;
		await users.updateOneUser({
			email,
			name,
			age,
			country,
			height,
			weight,
			gender,
		});
		res.status(204).send();
	} catch (e) {
		res.status(401).send();
	}
};

module.exports = {
	register,
	login,
	profile,
	updateProfile,
};
