const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    service: { type: String, enum: ['Guard', 'Nurse'] },
    date: Date,
    time: String,
    location: String
});

module.exports = mongoose.model('Booking', bookingSchema);
