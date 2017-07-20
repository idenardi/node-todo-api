const {MongoClient, ObjectID}  = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

console.log(new ObjectID());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    });

    // db.collection('Todos').find().toArray().then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.collection('Todos').find({ completed : false }).toArray().then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.collection('Todos').find({ 
    //     _id : new ObjectID('596f935cbe2ca0130b515003') 
    // }).toArray().then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.close();
})