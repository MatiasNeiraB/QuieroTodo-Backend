const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    sku: {
        type: Number,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        unique: true
    },
    img: {
        type: String,
        required: true,
    }
});

module.exports = model('product', productSchema);