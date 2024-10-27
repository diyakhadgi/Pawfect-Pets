const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
  const User = mongoose.model('users');
  const { name, email, password, address } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Email is already in use');
    }

    // Encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const createUser = await User.create({
      name,
      email,
      password: encryptedPassword,
      address
    });

    // Success response
    res.status(200).json({
      status: "Registration Successful",
      user: createUser._id, // You can return the user ID or other necessary details
    });
  } catch (error) {
    // Error response
    res.status(400).json({
      status: "Registration Failed",
      message: error.message
    });
    return;
  }

  console.log(req.body);  // You can remove this after debugging
};

module.exports = userRegister;
