const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server die"})
    }
};

const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server die"});
    }
};

module.exports = {
    getAllProducts,
    getProductsById,
};

// exports.getAllProducts = async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server die" });
//   }
// };
