const mongoose = require('mongoose');
const User = require('../models/User');

const matchHelper = {};

matchHelper.userInfo = async () => {
    return new Promise((resolve, reject) => {

        mongoose.connect(process.env.MONGO_DB, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true
        });

        const db = mongoose.connection;

        db.on('error', (err) => reject(err));
        db.once('open', async function () {
            try {
                const users = await User.find();
                resolve(users);
            } catch (err) {
                reject(err);
            }
        })
    })
}


module.exports = matchHelper;
