const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        },
        numberOfTables: {
            type: Number,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    }
)

module.exports = mongoose.model("user", usersSchema)