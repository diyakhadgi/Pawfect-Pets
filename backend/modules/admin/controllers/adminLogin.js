const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  const Admin = mongoose.model("Admin");
  let getAdmin;
  const { email, password } = req.body;
  try {
    if (!email) throw "Please provide your email";
    if (!password) throw "Please Provide your Password";
    getAdmin = await Admin.findOne({
      email,
    });
    if (!getAdmin) throw "Email doesn't exists";
    const matched = await bycrypt.compare(password, getAdmin.password);
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
    return;
  }
  const accessToken = jwt.sign(
    {
      _id: getAdmin._id,
      email: getAdmin.email,
      password: getAdmin.password,
      name: getAdmin.name,
      role:getAdmin.role
    },
    process.env.jwt_secret_key,
    { expiresIn: "30 days" }
  );
  console.log(req.body);
  res.status(200).json({ 
    status: "Login Succesfull",
    accessToken,
  });
};
module.exports = adminLogin;