const express = require('express');
const userRegister = require('./controllers/userRegistration');
const auth = require('../../middlewares/auth');
const userLogin = require('./controllers/userLogin');

const userRouter = express.Router();

userRouter.post('/register',userRegister);
userRouter.post('/login',userLogin)

userRouter.use(auth);

module.exports = userRouter;