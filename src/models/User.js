const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    config: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ConfigUser'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)