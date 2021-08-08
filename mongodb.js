const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error)
        return console.log('Unable to Connect to the database!')
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Rythem Datta',
    //     Age: 24
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: "Raman",
    //         age: 20
    //     },
    //     {
    //         name: "Aman",
    //         age: 17
    //     }
    // ], (error, result) => {
    //     if(error)
    //         return console.log('Unable to inser records')
    //     console.log(result.insertedIds)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Task 1',
            complete: true
        },
        {
            description: 'Task 2',
            complete: false
        },
        {
            description: 'Task 3',
            complete: true
        }
    ], (error, result) => {
        if(error)
            return console.log('Unable to insert records.')
        console.log(result.acknowledged)
    })
})