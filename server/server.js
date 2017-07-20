var mongoose = require('mongoose');

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (err) => {
    console.log('Unable to sabe todo')
});

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: false,
    completedAt: 12345
});

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (err) => {
    console.log('Unable to sabe todo')
});