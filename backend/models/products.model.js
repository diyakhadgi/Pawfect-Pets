const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, "Name is required"]
    },
    itemPrice: {
        type: Number,
        required: [true, "Item Price is required"]
    },
    stocks: {
        type: Number,
        required: [true],
        default: 1
    },
    expiryDate: {
        type: Date,
      },
      manufactureDate: {
        type: Date,
      },
    // Changed color to an array of strings
    color: [{
        type: String
    }],
    typeOfItem: {
        type: String,
        required: [true],
        enum: {
            values: ['toys', 'food', 'accessories', 'house'],
            message: '{VALUE} is not supported'
        },
    },
    // Changed imageUrl to an array of strings
    imageUrl: [{
        type: String,
        required: [true, "Image URL is required"]
    }]

}, {
    timestamps: true
});

const productModel = mongoose.model('products', productsSchema);
module.exports = productModel; 
