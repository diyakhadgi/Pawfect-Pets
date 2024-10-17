const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    itemName: {
        type:String,
        required:[true,"Name is required"]
    },
    itemPrice:{
        type:Number,
        required:[true,"Item Price is required"]
    },
    stocks:{
        type:Number,
        required:[true],
        default:1
    },
    expiryDate:{
        ManufacturedAt:Date,
        ExpiredAt:Date
    },
    color:{
        type: String
    },
    typeOfItem:{
        type:String,
        required:[true],
        enum:{
            values:['toys','food','accessories','house'],
            message:'{VALUE} is not supported'
        },
    }

},{
    timestamps:true
})
const itemModel = mongoose.model('items',itemSchema);
module.export = itemModel;