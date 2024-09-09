const Booking = require('../models/Booking');

exports.bookGuard = (req, res) => {
    // Logic to handle booking a guard
    const { userId, date, time, location } = req.body;
    const newBooking = new Booking({ userId, service: 'Guard', date, time, location });
    newBooking.save()
        .then(() => res.redirect('/family-dashboard'))
        .catch(err => res.status(500).send(err));
};

exports.bookNurse = (req, res) => {
    // Logic to handle booking a nurse
    const { userId, date, time, location } = req.body;
    const newBooking = new Booking({ userId, service: 'Nurse', date, time, location });
    newBooking.save()
        .then(() => res.redirect('/family-dashboard'))
        .catch(err => res.status(500).send(err));
};
