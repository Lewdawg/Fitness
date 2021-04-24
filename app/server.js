require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//Require Express
const app = express();


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
