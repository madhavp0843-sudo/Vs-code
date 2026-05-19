const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    quantity: Number,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Water", waterSchema);