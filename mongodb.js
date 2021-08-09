

const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error)
        return console.log('Unable to Connect to the database!')
    const db = client.db(databaseName)
    
    //read:: fetch from users collection(table) using findone() using query object passing key value.
    db.collection('users').findOne({name: 'Rythem Datta', age: 24}, (error, user) => {
        if(error)
            return console.log('Unable to fetch data.')
        console.log(user)
    })
    
    // //findone using object Id.
    // db.collection('users').findOne({"_id": ObjectId("610fc0ce0cfbc1db62fe3273")}, (error, user) => {
    //     if(error)
    //         return console.log('Unable to fetch data.')
    //     console.log(user)
    // })

    db.collection('users').find({age: 20}).toArray((error, users) =>{
        //console.log(users)
    }) 

    db.collection('tasks').findOne({description: 'Task 1'}, (error, task) => {
        if(error)
            return console.log('Unable to fetch data.')
        //console.log(task)
    })
    //var o_id = new MongoClient.ObjectID("610fc83684e1ed18a92a432c");
    db.collection('tasks').findOne({ _id: ObjectID("610fc83684e1ed18a92a432c") }, (error, task) => {
        if(error)
            return console.log('Unable to fetch data.')
        console.log(task)
    })


    db.collection('tasks').find({complete: true}).toArray((error, tasks) =>{
        //console.log(tasks)
    })

})