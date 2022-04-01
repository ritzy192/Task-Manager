const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

//to automatically parse incoming json into object
app.use(express.json())

//Create Users
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

//Read all Users
app.get('/users',(req,res) => {
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

//Read one user
app.get('/users/:id',(req,res) => {
    User.findById(req.params.id).then((user)=>{
        if(!user)
            return res.status(404).send()
       res.status(200).send(user) 
    }).catch((e)=>{
        res.status(500).send()
    })
})

//Create Tasks
app.post("/tasks", (req,res) =>{
    //initialise new task
    const task = new Task(req.body)    
    //save task into database
    task.save().then(() => {
        res.status(200).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//Read all Tasks
app.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        if(!task)
            return res.status(404).send()
        res.status(200).send(tasks)
    }).catch((e)=>{
        res.status(500).send()
    })
})

//Read One Task
app.get('/tasks/:id',(req,res)=>{
    Task.findById(req.params.id).then((task)=>{
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})
app.listen(port,() => {
    console.log('Server is up on port ' + port)
})