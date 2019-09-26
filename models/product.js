const db = require("mongoose");

const productSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    title:          { type: String, required: true },
    description:    { type: String, required: true },
    price:          { type: String, required: true },
    color:          { type: String, required: true },
    img:            { type: String, required: true },
    alt:            { type: String },

    dimensions:     { type: String, required: true },
    screen:         { type: String, required: true },
    phoneWeight:    { type: String, required: true },

    rating:         { type: String, required: true },
    
    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now },

});

module.exports = db.model("Product", productSchema);