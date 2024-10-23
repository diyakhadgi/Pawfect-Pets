const express = require("express");
const adminLogin = require("./controllers/AdminLogin");
const adminRegister = require("./controllers/adminRegister");
const adminAuth = require("../../middlewares/adminAuth");
const adminDashboard = require("./controllers/adminDashboard");
const adminRouter = express.Router();


adminRouter.post("/adminLogin",adminLogin);
adminRouter.post("/adminRegister",adminRegister);
adminRouter.get("/adminDashboard",adminAuth,adminDashboard);

module.exports = adminRouter;