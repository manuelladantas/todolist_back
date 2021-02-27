const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    finishDate: {
        type: Date,
        require: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);