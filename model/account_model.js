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
        type: Number,
        required: true
    },
    mltselect: {
        type: Number,
        required: false
    },
    area: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('account', accountSchema);