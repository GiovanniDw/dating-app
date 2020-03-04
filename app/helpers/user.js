const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User');

const userHelper = {};

userHelper.findOneByEmail = async (email) => {
    const user = await User.findOne({
        username: email
    })
    return user
}

// userHelper.register = async (user) => {
//             return new Promise(function (resolve, reject) {
//                     mongoose.connect(process.env.MONGO_DB, {
//                         dbName: process.env.DB_NAME,
//                         useNewUrlParser: true,
//                         useUnifiedTopology: true
//                     });

//                     const db = mongoose.connection;

//                     db.on('error', error);
//                     db.once('open', async () => {
//                             User.register(new User({
//                                     username: user.username,
//                                     games: []
//                                 }), user.password

//                             });
//                     });
//             };