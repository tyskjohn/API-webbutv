const db = require('mongoose');
const Order = require('../models/order');


exports.createOrder = (req, res) => {

    const order = new Order(
        {
            _id:            new db.Types.ObjectId,
            article1: {    
                            title: req.body.title,
                            color: req.body.color,
                            price: req.body.price 
            },
            created:        { type: Date, default: Date.now },
            modified:       { type: Date, default: Date.now },
        }
    )

    order.save()
    
        .then(() => {
            res.status(201).json({
                payload: order,
                message: 'Order was placed'
            })
        })

        .catch((error) => {
            res.status(500).json({
                message: 'Unable to place order',
                error: error
            })
        })

}

exports.getOrders = (req, res) => {

}

exports.getOneOrder = (req, res) => {
    
}