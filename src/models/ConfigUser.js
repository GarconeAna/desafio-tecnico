const mongoose = require("mongoose");

const ConfigUser = new mongoose.Schema({
    theme: {
        type: String,
        required: true
    },
    notification: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("ConfigUser", ConfigUser)