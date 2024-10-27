const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  const Admin = mongoose.model("Admin");
  let getAdmin;
  const { email, password } = req.body;

  try {
    if (!email) throw new Error("Please provide your email");
    if (!password) throw new Error("Please provide your password");

    getAdmin = await Admin.findOne({ email });
    if (!getAdmin) throw new Error("Email doesn't exist");

    const matched = await bcrypt.compare(password, getAdmin.password);
    if (!matched) throw new Error("Invalid password");

  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }

  const accessToken = jwt.sign(
    {
      _id: getAdmin._id,
      email: getAdmin.email,
      name: getAdmin.name,
      role: getAdmin.role
    },
    process.env.jwt_secret_key,
    { expiresIn: "30 days" }
  );

  console.log(req.body);
  return res.status(200).json({ 
    status: "Login Successful",
    accessToken,
  });
};

module.exports = adminLogin;
