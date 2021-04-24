require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//Require Express
const app = express();
const path = require("path");


//Use-cases  
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Port & DB connection
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_LINK, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then((result) => app.listen(port, () => {
        console.log(`Listening to port: ${port} and connected to Database`);
    }))
    .catch((err) => console.log(err))



//Routes
const workoutsRoutes = require('./routes/workout.routes.js');

app.use(workoutsRoutes())



/* Serves the build folder on root */
app.use(express.static(path.join(__dirname, "frontend", "build")));

/* When we 'build' our React app, this path will render that 'built' file that is inside fo the frontend folder. It makes a request to the root responses with the index.html */
app.use((req, res) => res.sendFile(path.join(__dirname, "frontend", "build", "index.html")));