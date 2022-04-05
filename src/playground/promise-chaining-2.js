require('../db/mongoose')
const Task = require('../models/task')

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:true})
    return {task,count}
}

deleteTaskAndCount('624c335e9ebb404534d94d4d').then((details)=>{
    console.log(details)
}).catch((e)=>{
    console.log('*******ERWERWERWERWER**********', e)
})


// Task.findByIdAndDelete('624c33589ebb404534d94d4b').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})   
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })