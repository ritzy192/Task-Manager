const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

//to automatically parse incoming json into object
app.use(express.json())

//Post User
app.post("/users", (req,res) =>{
    //initialise new user
    const user = new User(req.body)
    
    //save user into database
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//POST Task
app.post("/tasks", (req,res) =>{
    //initialise new task
    const task = new Task(req.body)
    
    //save task into database
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port,() => {
    console.log('Server is up on port ' + port)
})