const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

//to automatically parse incoming json into object
app.use(express.json())

app.post("/users", (req,res) =>{
    //initialise new user
    const user = new User(req.body)
    
    //save user into database
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.listen(port,() => {
    console.log('Server is up on port ' + port)
})