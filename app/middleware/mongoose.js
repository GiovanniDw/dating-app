const mongoose = require('mongoose');

module.exports = () => {
    let MONGODB_URI = "mongodb+srv://giovanni:giovanni@dating-rkiyp.mongodb.net/test?retryWrites=true&w=majority";

    mongoose.Promise = global.Promise;

    return mongoose.connect(MONGODB_URI);
}