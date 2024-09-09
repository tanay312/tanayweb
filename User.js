const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    role: { type: String, enum: ['Client', 'Guard', 'Nurse'] }
});

module.exports = mongoose.model('User', userSchema);
