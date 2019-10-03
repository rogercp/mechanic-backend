const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser')
const testroute = require('./server/routes/test');

app.use(bodyParser.json());

app.use('/',testroute);

//connnect to db
mongoose.connect(process.env.DBCONNECT,{ useNewUrlParser: true },()=>console.log("conncectedtdb"));



const port = process.env.PORT || 8888;

app.listen(port);