const express = require('express');
const mongoose = require('mongoose');
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');
const db = require('./utils/db');

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
db.connect();

// Routes
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});