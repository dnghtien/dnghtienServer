const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    select: {
        type: String,
        required: true
    },
    mltselect: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('account', accountSchema);