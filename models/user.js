const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    surName: {
        type: String,
        trim: true,
    },
    email: {
        type: email,
        unique: true
    },
    password: {
        type: password,
        unique: true
    },
    rol: {
        type: String,
        required: true,
    }   
});

module.exports = model('user', userSchema);