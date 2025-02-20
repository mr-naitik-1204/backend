const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        p1: {
            type: String,
            required: true
        },
        p2: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
       
    }
)

module.exports = mongoose.model("product", productSchema)