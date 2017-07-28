const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

//  Todo.findOneAndRemove({}).then((res) => {
// });

// Todo.findByIdAndRemove('597a976de71086d6bea19613').then((res)=>{
//     console.log(res);
// });