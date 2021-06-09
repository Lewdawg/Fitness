/* needs to be in the frontend */

const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
	try {
		res.locals.payload = await jwt.verify(
			req.cookies.token,
			process.env.JWT_SECRET,
			(error, payload) => {
				if (error) throw new Error('token expired / broken');
				return payload;
			}
		);
		next();
	} catch (e) {
		res.clearCookie('token');
		res.status(401).send();
	}
};
