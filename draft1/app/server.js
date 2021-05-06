/* set defaults */
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const axios = require('axios');

/* connect to database */
require('./database/final-project.database.js').connect();

/* set up express */
const express = require('express');
const app = express();
app.use(cors());

/* start server */
const port = process.env.PORT || 3777;
app.listen(port, () => console.log(`server listening on port ${port}`));

/* serves the build directory on root */
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

/* api routes */
const workoutsRoutes = require('./routes/workouts.routes.js');
app.use(workoutsRoutes());
/* just a test route for the google maps api request */
app.get('/api/testMaps', async (req, res) => {
    /* &type=park ==> to only get the parks */
	const response = await axios(
		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s&location=51.3179648,12.379750399999999&radius=1000'
	);
	const data = response.data;
	res.status(200).send(data);
});

/* request to root responses with the index.html */
app.use((req, res) =>
	res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
);
