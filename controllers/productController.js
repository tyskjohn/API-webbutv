const db = require('mongoose');
const Product = require('../models/product');

//unrestricted
exports.getProducts = (req,res) => {

    let _products = [
        {   
            _id: 1,  

            title: 'iPhone 11 Pro Max', 
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 
            price: 'Updated 3 mins ago', 
            color: 'boxtitle',
            img: 'https://www.elgiganten.se/image/dv_web_D180001002105685/10770/iphone-xr-128-gb-svart.jpg?$fullsize$',
            alt: '...',

            dimensions: '15, 7, 0.8',
            screen: '6,10',
            phoneWeight: '195',

            rating: '3.5',
        }
    ];

    return res.status(200).json(_products);
};

exports.getProduct = (req, res) => {
    Product
        .findOne({_id: req.params.id})
        .then((data) => {
            return res.status(200).json(data)
        })
};