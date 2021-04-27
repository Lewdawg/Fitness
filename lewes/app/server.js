/* set environment */
require('dotenv').config();

/* connect to database */
require('./database/final-project.database.js').connect();

/* set up express */
const express = require("express");
const app = express();
const path = require("path");


/* start server */
const port = process.env.PORT || 3777;
app.listen(port, () => console.log(`server listening on port ${port}`));

/* serves the build directory on root */
app.use(express.static(path.join(__dirname, "frontend", "build")));

/* api routes */
const workoutsRoutes = require('./routes/workouts.routes.js');
app.use(workoutsRoutes());


/* request to root responses with the index.html */
app.use((req, res) => res.sendFile(path.join(__dirname, "frontend", "build", "index.html")));
