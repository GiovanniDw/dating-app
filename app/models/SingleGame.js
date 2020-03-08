const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SingleGameSchema = new Schema({
    _id: Number,
    title: String,
    cover: String
});

const SingleGame = mongoose.model('SingleGame', SingleGameSchema, 'game');
module.exports = SingleGame;