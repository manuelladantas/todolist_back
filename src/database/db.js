const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist');
mongoose.Promise = global.Promise;

module.exports = mongoose;