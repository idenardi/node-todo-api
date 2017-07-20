const {MongoClient, ObjectID}  = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

console.log(new ObjectID());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({ text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({ text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({ text : 'Eat lunch'}).then((result) => {
         console.log(result);
    });

    db.close();
})