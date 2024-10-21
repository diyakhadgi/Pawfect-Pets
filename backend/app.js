const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./modules/users/users.routes');
const productsRouter = require('./modules/products/products.routes');
const cartRouter = require('./modules/cart/carts.routes');
const path = require('path');
const app = express();



require('dotenv').config()

require('./models/users.model');
require('./models/products.model');
require('./models/carts.model');

mongoose.connect(process.env.mongo_connect,{}).then(()=>{
    console.log("DB Connected");
})
.catch((e)=>{
    console.log("Connection failed",e);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/user',userRouter);
app.use('/product',productsRouter);
app.use('/cart',cartRouter)

app.listen(8000,()=>{
    console.log('Server starged succesfully');
})