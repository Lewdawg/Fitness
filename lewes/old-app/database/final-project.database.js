const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log('database "final-project" is connected');
    } catch (error) {
        console.log('An error occurred while trying to connect to database "final-project": ', error);
        process.exit(1);
    }
}

exports.connect = connect;