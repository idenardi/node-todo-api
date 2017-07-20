var mongoose = require('mongoose');

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Edit this video'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (err) => {
    console.log('Unable to sabe todo', err)
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        index: true
    }
});


var newUser = new User({
    email: 'sample@sample.com'
});

newUser.save().then((doc) => {
    console.log('Saved user', doc)
}, (err) => {
    console.log('Unable to sabe user', err)
});


