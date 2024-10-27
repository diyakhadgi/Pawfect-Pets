const express = require('express');
const auth = require('../../middlewares/auth');
const { getAllDogs } = require('./controllers/GetDogs');
const { getSingleDog } = require('./controllers/GetSingleDog');
const { adoptDog } = require('./controllers/AdoptDog');
const adoptionRouter = express.Router();

adoptionRouter.get('/dogs',getAllDogs);
adoptionRouter.get('/dogs/:id',getSingleDog);
adoptionRouter.post('/dogs/adopt/:id',auth,adoptDog);

module.exports = adoptionRouter;