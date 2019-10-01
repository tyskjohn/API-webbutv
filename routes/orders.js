const route = require('express').Router();

const orders = require('../controllers/orderController');

route.post("/register", orders.createOrder);

//unres routes
route.get("/all", orders.getOrders);

route.get("/:id", orders.getOneOrder);



module.exports = route;