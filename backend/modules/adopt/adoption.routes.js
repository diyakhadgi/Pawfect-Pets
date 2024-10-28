const express = require('express');
const auth = require('../../middlewares/auth');
const upload = require("../../middlewares/upload");
const { getAllDogs } = require('./controllers/GetDogs');
const { getSingleDog } = require('./controllers/GetSingleDog');
const { adoptDog } = require('./controllers/AdoptDog');
const insertDogInfo = require('./controllers/InsertDogInfo');
const adoptionRouter = express.Router();

adoptionRouter.get('/getall',getAllDogs);
adoptionRouter.get('/dog/:id',getSingleDog);
adoptionRouter.post('/dogs/adopt/:id',auth,adoptDog);
adoptionRouter.post('/insertinfo',upload.array('image',5),insertDogInfo)

module.exports = adoptionRouter;