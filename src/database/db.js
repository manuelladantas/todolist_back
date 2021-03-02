const mongoose = require('mongoose');

const MONGO_URL = '';

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