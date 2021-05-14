const users = require('../models/users.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
	try {
		/* tests */
		api / login;
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
			{ expiresIn: 60 }
		);
		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 900000 /* 15 minutes in ms */,
		});
		res.status(200).send(true);
	} catch (e) {
		res.status(401).send(false);
	}
};

const registerLanding = async (req, res) => {
	try {
		res
			.status(200)
			.render('register', { response: 'No responses yet !', exp: '∞' });
	} catch (e) {
		res.status(404).render('error', {
			response: 'Can not serve the register landing page: ' + e.message,
			exp: 0,
		});
	}
};
const register = async (req, res) => {
	try {
		res.status(200).render('register', {
			response: await users.createOne(
				req.body.email,
				req.body.password,
				req.body.approved
			),
			exp: '∞',
		});
	} catch (e) {
		res.status(404).render('error', {
			response: 'Invalid register details: ' + e.message,
			exp: 0,
		});
	}
};

module.exports = {
	loginLanding,
	login,
	registerLanding,
	register,
};
