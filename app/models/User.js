const mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    platforms: [{
        type: String
    }],
    genres: [{
        type: String
    }],
    picture: String,
    about: String,
    password: String,
    games: [{
        type: mongoose.Schema.Types.Number,
        ref: 'SingleGame'
    }],
    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislike: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;