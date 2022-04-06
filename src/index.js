const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

//to automatically parse incoming json into object
app.use(express.json())

//Create Users
app.post("/users", async (req,res) =>{
    //initialise new user
    const user = new User(req.body)  
    try{
        await user.save()
        res.status(201).send(user)
    }catch (e) {
        res.status(400).send(e)
    }
})

//Read all Users
app.get('/users', async (req,res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Read one user
app.get('/users/:id',async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        if(!user)
            return res.status(404).send()
        res.status(200).send(user)       
    } catch (e) {
        res.status(500).send(e)
    }
})

//Update User
app.patch('/users/:id',async (req,res)=>{
    const updateFieldsRequested = Object.keys(req.body)
    const allowedUpdates = ['name','password','email','age']
    
    //checks if requested fields are present in allowedupdates array
    const isValidUpdate = updateFieldsRequested.every((key)=>allowedUpdates.includes(key))
    if(!isValidUpdate)
        return res.status(404).send({error:'Invalid Update!'})
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true,validators:true})
        if(!user)
            return res.status(404).send()
        res.send(user)
    } catch (e) {
        return res.status(500).send(e)
    }
    
})

//Create Tasks
app.post("/tasks", async (req,res) =>{
    //initialise new task
    const task = new Task(req.body) 
    try {
        await task.save()
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Read all Tasks
app.get('/tasks',async (req,res)=>{
    try {
        const tasks = await Task.find({})
        if(!tasks)
            return res.status(404).send()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Read One Task
app.get('/tasks/:id',async (req,res)=>{
    try {
        const task = await Task.findById(req.params.id)
        if(!task)
            return res.status(404).send()
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})
app.listen(port,() => {
    console.log('Server is up on port ' + port)
})