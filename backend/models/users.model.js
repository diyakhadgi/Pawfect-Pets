const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Password must be atleast 6 character long"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    }
},{
    timestamp:true
})
const userModel = mongoose.model('users',userSchema);
module.export = userModel;