import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        original: {
            type: Number,
            required: true
        },
        markup1: {
            type: Number,
            required: true
        },
        markup2: {
            type: Number,
            required: true
        }
    },
    stock: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;