const mongoose = require('mongoose');

module.exports = () => {
    let MONGODB_URI = "mongodb+srv://giovanni:giovanni@dating-rkiyp.mongodb.net/test?retryWrites=true&w=majority";

    mongoose.Promise = global.Promise;

    return mongoose.connect(process.env.MONGO_DB, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}