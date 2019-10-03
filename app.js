const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.listen(3000);

//connnect db
mongoose.connect(process.env.DBCONNECT,{ useNewUrlParser: true },()=>console.log("conncectedtdb"))
