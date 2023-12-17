const express = require ("express");
const router = require('./routes/routes.js');
const connectDB = require("./config/db.js");
const morgan = require('morgan');
const clc = require("cli-color");
require('dotenv').config()

// server
const app = express();
const port = process.env.PORT;

// connexion mongoDB
connectDB

// middlewares
app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',router)

// listening server
app.listen(port,()=>{
    console.log(clc.blue(`Server =>  http://localhost:${port}`))
})