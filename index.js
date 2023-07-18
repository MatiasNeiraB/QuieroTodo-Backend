const express = require('express')
const app = express();
const producto = require('./routes/producto')
const {connectDB} = require('./db/db.js')
const dotenv = require('dotenv').config();
const cors = require("cors");

connectDB();
app.use(cors());
app.use('/product', producto)

app.listen(4000,()=>{   
    console.log('Escuchando Puerto 4000');
})
