const route = require('express').Router();

const products = require('../controllers/productController');

//unres routes
route.get("/all", products.getProducts);

route.get("/:id", products.getProduct);

module.exports = route;