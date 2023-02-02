//Deploying app with Cyclic

//packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//file import
const todoSchema = require('./model/Todo')
//this is the model:
const Todo = mongoose.model('To Dos', todoSchema)

//has to do with post request through postman
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//This is how we connect to the database and port:
const mongoDBAccess = 'mongodb+srv://adminuser:adminuser@todolist-mern-project.avm94zg.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(mongoDBAccess,
  { useNewUrlParser: true })
  .then(() => {
    console.log('your app is connected to MongoDB')
  }).catch((err) => {
    console.log(err)
  })

// ****************CRUD operations, these are for example purposes:*****************

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


//***********APIs***********************

// create first endpoint/API; remember, apis are in the server and make requests of the db. The client will send reqs to the api, and the api req from db, then res to api/server, then api res to client!!!
//'app' means express
//client wants info from server = request
//give info to frontend from backend = response
//A client cannot req data for which we did not create an api endpoint created

//Get all Todos:
app.get('/todos', (request, response) => {
  Todo.find((err, todo) => {
    if (err) {
      response.send(err) //send the err to the client
    }
    response.send(todo) //send the todos to the client
    //go to post man, do a get request from the port with '/todo' - will give the response
  })
})
//Get Todo by ID:
app.get('/todo/:id', (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      res.send(err)
    }
    res.send(todo)
  })
})

//Post a new Todo
app.post('/todo', (req, res) => { // the '/createTodo' is what goes at the end of the localhost:port url when I make the post request in postman
  const newTodo = new Todo({
    name: req.body.name,
    date: req.body.data,
    isCompleted: req.body.isCompleted
  })

  newTodo.save().then((todo) => {
    res.send('todo created')
  }).catch((err) => {
    res.send(err)
  })
})

//Update a Todo
app.patch('/todo/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, { isCompleted: false }, (err, todo) => {
    if (err) {
      res.send(err)
    }
    res.send(todo)
  })
})

app.put('/todo/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, { isCompleted: req.body.isCompleted, name: req.body.name, date: req.body.date }, (err, todo) => {
    if (err) {
      res.send(err)
    }
    res.send(todo)
  })
})

//Delte a Todo
app.delete('/todo/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err, todo) => {
    if (err) {
      res.send(err)
    }
    res.send(todo)
  })
})


// a port is a URL that gives outsiders access to our server
const port = 8000
app.listen(port, () => {
  console.log(`we are in port ${port}`)
})


//We installed nodemon globally so that anytime we make an edit, it automatically reruns 'node index.js' in the terminal