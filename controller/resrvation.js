const resrvation = require('../model/resrvation')


const Reservation = require('../model/resrvation'); // Import the reservation model

exports.resrvation = async (req, res) => {
    try {
        const { person, datetimelocal, Time } = req.body; // Extract the data from the request body

        const newReservation = new Reservation({
            person: person,
            datetimelocal: datetimelocal,
            Time: Time,
        });

        const savedReservation = await newReservation.save(); // Save the reservation to the database

        res.status(200).json({
            status: 'Success',
            Message: 'Data created successfully',
            Data: savedReservation
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: error.message
        });
    }
};
