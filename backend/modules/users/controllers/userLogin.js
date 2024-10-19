const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const User = mongoose.model("users");
  let getUser;
  const { email, password } = req.body;
  try {
    if (!email) throw "Please provide your email";
    if (!password) throw "Please Provide your Password";
    getUser = await User.findOne({
      email,
    });
    if (!getUser) throw "Email doesn't exists";
    const matched = await bycrypt.compare(password, getUser.password);
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
    return;
  }
  const accessToken = jwt.sign(
    {
      _id: getUser._id,
      email: getUser.email,
      password: getUser.password,
      name: getUser.name,
    },
    process.env.jwt_salt,
    { expiresIn: "30 days" }
  );
  console.log(req.body);
  res.status(200).json({ 
    status: "Login Succesfull",
    accessToken,
  });
};
module.exports = userLogin;