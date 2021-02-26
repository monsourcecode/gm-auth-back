const mongoose = require('mongoose')

const userShcemas = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    profile: {
        type: String
    },
    role: {
        type: String
    },
    valider: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userShcemas);
