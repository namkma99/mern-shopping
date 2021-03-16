require('dotenv').config();

const productData = require('./data/products');
const db = require('./config/db');
const Product = require('./models/Product');

db.connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("data import success");

        process.exit();
    } catch (error) {
        console.log("Error with data import", error);
        process.exit(1);
    };

};

importData();

