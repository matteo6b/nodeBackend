'use strict'

const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
let app = express();


//midedlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
//routes
const userRoutes = require('./routes/user')
const videoRoutes = require('./routes/videos')
app.use('/api',userRoutes)
app.use('/api',videoRoutes)

app.get('/',(req,res) => {
  res.status(200).send({message:"relax.."})
});
 module.exports = app;
