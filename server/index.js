//packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//file import
const todoSchema = require('./model/Todo')
//this is the model:
const Todo = mongoose.model('To Dos', todoSchema)

//This is how we connect to the database and port:
const mongoDBAccess = 'mongodb+srv://adminuser:adminuser@todolist-mern-project.avm94zg.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoDBAccess,
  { useNewUrlParser: true })
  .then(() => {
    console.log('your app is connected to MongoDB')
  }).catch((err) => {
    console.log(err)
  })

// // Creating a new 'to do' item; is the following like extending a class?
// const newTodo = {
//   name: 'clean apartment',
//   date: '1/28',
//   isCompleted: false
// }
// let sendingTodo = new Todo(newTodo)

// // how to 'create' (push to the database)
// sendingTodo.save()

// // Read a todo from the DB
// Todo.find((err, todos) => {
//   if(err) {
//     console.log(err)
//   }
//   console.log(todos)
// })

// // Update a todo from the DB
// Todo.findOneAndUpdate(
//   { name: 'clean apartment' }, //what we are looking for
//   { date: '01/30/2023' }, //what we want to update
//   (err, todo) => { //function to run
//     if (err) {
//       console.log(err)
//     }
//     console.log(todo)
//   })

// //Delte a todo from the DB
// Todo.findOneAndDelete(
//   { _id: '63d304a786ff72f02ad55a80' },
//   (err, todos) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(todos)
//   }
// )

// create first endpoint/API
//'app' means express
//client wants info from server = request
//give info to frontend from backend = response
app.get('/todo', (request, response) => {
  Todo.find((err, todo) => {
    if (err) {
      response.send(err) //send the err to the client
    }
    response.send(todo) //send the todos to the client
    //go to post man, do a get request from the port with '/todo' - will give the response
  })
})


// a port is a URL that gives outsiders access to our server
const port = 8000
app.listen(port, () => {
  console.log(`we are in port ${port}`)
})