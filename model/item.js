const mongoose = require('mongoose')

const itemShcemas = mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    }
})

module.exports = mongoose.model('Item', itemShcemas);
