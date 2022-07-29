const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        trim: true,
        maxlength: [5, 'Product price cannot exceed 5 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],

    },
    ratings: {
        type: Number,
        default: 0

    },
    images: [
        {
            public_id: {
                type: String,
                required:true
            },
            url: {
                type: String,
                required:true
            },

        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Heath',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }

    },
    seller:{
        type: String,
        required: [true, 'Please enter product Seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [100, 'Product stock cannot exceed 100'],
        default: 0
    },
    numofReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true,
             },
             rating: {
                type: Number,
                required: true
             },
             comment: {
                type: String,
                required: true
             }
        }

    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    } 

})

module.exports = mongoose.model('Product',productSchema);