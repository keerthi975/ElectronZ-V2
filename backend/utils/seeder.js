const   product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');


//Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {

        await product.deleteMany();
        console.log('Product deleted successfully');

        await product.insertMany(products)
        console.log('Product inserted successfully');

        process.exit();
        
    } catch(error){
        console.log(error);
        process.exit();
    } 
}
seedProducts()
