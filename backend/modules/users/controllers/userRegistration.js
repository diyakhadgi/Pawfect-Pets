const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const userRegister = async(req,res)=>{
    const User = mongoose.model('users');
    const {name,email,password,address} = req.body;
    const encryptedPassword = await bycrypt.hash(password,10);

    try {
        const createUser = await User.create({
            name,
            email,
            password: encryptedPassword,
            address
        })
    } catch (error) {
        res.status(400).json({
            status:"Registration Failed",
            message:error.message
        })
        return;
    }

    console.log(req.body);
    res.status(200).json({
        status:"Registration Succesfull"
    })
}
module.exports = userRegister;