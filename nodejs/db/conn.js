
const mongoose = require('mongoose')

const connectionString = "mongodb://127.0.0.1:27017";
mongoose.connect(connectionString).then((data) => {
    console.log(`connection to Database is successful: ${data.connection.host}`);
}).catch((err) => { console.log(`database error: ${err}`); })