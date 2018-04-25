const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const InfoSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Info title is required!']
    },
    genre: {
        type: String
    },
    yearReleased: {
        type: Number
    },
    system: {
        type: String
    }
}, {
    timestamps: {}
})

const GameSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Game title is required!']
    },
    gameLink: {
        type: String,
        required: [true, 'Game link is required!']
    },
    photoUrl: {
        type: String,
        default: 'https://i.imgur.com/ul23PsQ.jpg'
    },
    infoList: [InfoSchema]
}, {
    timestamps: {}
})

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    email: {
        type: String
    },
    firstName: {
        type: String,
        required: [true, 'First name is required!']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!']
    },
    photoUrl: {
        type: String,
        default: 'https://i.imgur.com/ul23PsQ.jpg'
    },
    games: [GameSchema]
}, {
    timestamps: {},
    usePushEach: true
})

module.exports = {
    UserSchema,
    GameSchema,
    InfoSchema
}