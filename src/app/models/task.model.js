const mongoose = require('../../database');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    finishDate: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('Task', TaskSchema);