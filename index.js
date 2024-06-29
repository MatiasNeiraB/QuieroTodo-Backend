const express = require('express');
const app = express();
const products = require('./routes/products');
const admin = require('./routes/admin');
const {connectDB} = require('./db/db.js');
const dotenv = require('dotenv').config();
const cors = require("cors");

connectDB();
app.use(cors());
app.use('/product', products)
app.use('/admin', admin)

app.listen(4000,()=>{   
    console.log('Escuchando Puerto 4000');
})
