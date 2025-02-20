const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("order", orderSchema);
