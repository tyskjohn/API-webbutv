const db = require("mongoose");

const orderSchema = db.Schema({
    _id:            db.Schema.Types.ObjectId,

    title:          { type: String, required: true },
    color:          { type: String, required: true },
    price:          { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now },
});

module.exports = db.model("Order", orderSchema);