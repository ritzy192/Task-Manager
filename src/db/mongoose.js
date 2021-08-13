const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manger-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('Users', {
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Email is not valid')
        }
    },
    Age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0)
                throw new Error('Age must be a positive number.')
        }
    },
    Password: {
        type: String,
        minLength: 6,
        required: true,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password'))
                throw new Error('Password can not include Password')
        }
    }
}) 

const user1 = new User({
    Name: 'Rohit',
    Age:20,
    Email: 'Ritzy192@gmail.com', 
    Password: 'password'
})
user1.save().then( () => {
    console.log(user1)
}).catch((error) => {
    console.log(error)
})

const user2 = new User({
    Name: 'Mohit',
    Age:20,
    Email: 'Ritzy192@gmail.com' ,
    Password: 'sasfas      '
})

user2.save().then( () => {
    console.log(user2)
}).catch((error) => {
    console.log(error)
})

const Tasks = mongoose.model('Tasks', {
    Description: {
        type: String,
        trim: true,
        required: true
    }, 
    Completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    Description: '',
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})