const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manger-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('Users', {
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        validate(value){
            if(value<0)
                throw new Error('Age must be a positive number.')
        }
    }
}) 

const me = new User({
    Name: 'Rythem Datta',
    Age: 25,
})

me.save().then( () => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})

// const Tasks = mongoose.model('Tasks', {
//     Description: {
//         type: String
//     }, 
//     Completed: {
//         type: Boolean
//     }
// })

// const task = new Tasks({
//     Description: 'Task 1',
//     Completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })