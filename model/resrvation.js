const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    person: {
        type: Number,
        required: true
    },
    datetimelocal: {
        type: String, // Use String for datetime-local
        required: true
    },
    Time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Reservation", reservationSchema);
