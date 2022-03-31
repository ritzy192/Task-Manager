const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Email is not valid')
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0)
                throw new Error('Age must be a positive number.')
        }
    },
    password: {
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

module.exports = User