import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerNumber: {
        type: String,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    delivery: {
        type: String,
        required: true
    },
    salesAgent: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Delivered', 'Cancelled']
    },
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        price: {
            original: { type: Number, required: true },
            markup1: { type: Number, required: true },
            markup2: { type: Number, required: true }
        },
        selectedMarkup: {
            type: String,
            required: true,
            enum: ['original', 'markup1', 'markup2']
        },
        stock: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;