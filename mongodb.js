

const {MongoClient, ObjectId} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error)
        return console.log('Unable to Connect to the database!')
    const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateOne({
    //     _id: ObjectId("610f9d3172356c96ee568e37")
    // }, {
    //     $set: {
    //         name: 'Rohit'
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    
    //chaining the prommise, smaller than the above method.
    db.collection('users').updateOne({
        _id: ObjectId("610f9d3172356c96ee568e37")
        }, {
            $inc: {
                age: 1
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })

    db.collection('users').findOne({"_id": ObjectId("610f9d3172356c96ee568e37")}, (error, user) => {
        if(error)
            return console.log('Unable to fetch data.')
        console.log(user)
    })

    db.collection('tasks').updateMany({
        completed: false
    },{
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })   
})