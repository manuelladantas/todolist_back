const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function () {

    if (!this.isModified('password')) {
        return Promise.resolve();
    }

    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    return Promise.resolve();
});

module.exports = mongoose.model('User', UserSchema);