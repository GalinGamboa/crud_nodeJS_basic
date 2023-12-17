const express = require ("express");
const router = require('./routes/routes.js');
const connectDB = require("./config/db.js");
const morgan = require('morgan');
const clc = require("cli-color");
require('dotenv').config()

// levantar el servidor
const app = express();
const port = process.env.PORT;

// conexion mongoDB
connectDB

// middlewares
app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/',router)

// escuvhar el srvidor
app.listen(port,()=>{
    console.log(clc.blue(`Server =>  http://localhost:${port}`))
})