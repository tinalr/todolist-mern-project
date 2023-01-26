const express = require('express');
const app = express();

const mongoose = require('mongoose');

const mongoDBAccess = 'mongodb+srv://adminuser:adminuser@todolist-mern-project.avm94zg.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoDBAccess,
  { useNewUrlParser: true })
  .then(() => {
    console.log('your app is connected to MongoDB')
  }).catch((err) => {
    console.log(err)
  })

