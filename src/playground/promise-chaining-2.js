require('../db/mongoose')
const Task = require('../models/task')

Task.findByIdAndDelete('624c33589ebb404534d94d4b').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})   
}).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})