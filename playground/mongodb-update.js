const {MongoClient, ObjectID}  = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

console.log(new ObjectID());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({ 
    //     _id: new ObjectID('59700547f4c4ab06a7b679b7') 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //         returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({ 
        _id: new ObjectID('596f93b780f79013621e9673') 
    }, {
        $set: {
            name: 'Andrew'
        },
        $inc: {
            age: 10
        }
    }, {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    db.close();
})