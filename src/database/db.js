const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://bolttech:bolttech123@cluster0.aq2ju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = () => {
  mongoose.connect(
    process.env.MONGO_URL || MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log('Mongo Connected'),
  );
  mongoose.set('useFindAndModify', false);
};