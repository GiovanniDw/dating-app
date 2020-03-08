const mongoose = require('mongoose');
const db = require('../models');

const profileHelper = {};


profileHelper.saveInfo = (info) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOneAndUpdate({
                _id: req.user._id
            }, {
                $set: {
                    name: info.name,
                    platforms: info.platforms,
                    genres: info.genres,
                    picture: req.file ? req.file.filename : null,
                    about: info.about
                }
            });
            await user.save();
            resolve(user);
        } catch (err) {
            reject({
                type: 'error'
            });
        };
    });
};

profileHelper.addGame = (userID, gameID) => {
    return new Promise(async (resolve, reject) => {


        try {
            const user = await db.User.findById(userID);
            const checkDup = user.games.includes(gameID);
            if (!checkDup) {
                user.games.push(gameID);
                await user.save();
            }

            resolve('has resolved');
        } catch (err) {
            reject(err);
        }
    });
};


profileHelper.myGames = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findById(userID).select('games').populate('games');
            resolve(user.games);
        } catch (err) {
            reject({
                type: 'error'
            })
        }
    })
}




module.exports = profileHelper;