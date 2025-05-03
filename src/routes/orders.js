const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Route to create a new order
router.post('/', ordersController.createOrder);

// Route to retrieve all orders
router.get('/', ordersController.getAllOrders);

// Route to retrieve a specific order by ID
router.get('/:id', ordersController.getOrderById);

// Route to update an existing order by ID
router.put('/:id', ordersController.updateOrder);

// Route to delete an order by ID
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;