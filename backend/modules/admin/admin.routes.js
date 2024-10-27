const express = require("express");
const adminRegister = require("./controllers/adminRegister");
const adminAuth = require("../../middlewares/adminAuth");
const adminDashboard = require("./controllers/adminDashboard");
const adminRouter = express.Router();
const adminLogin = require("./controllers/adminLogin");

adminRouter.post("/adminLogin",adminLogin);
adminRouter.post("/adminRegister",adminRegister);
adminRouter.get("/adminDashboard",adminAuth,adminDashboard);

module.exports = adminRouter;