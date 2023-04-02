import express from 'express';
// import Product schema from models folder
import Product from '../models/Product.js';
const productRoutes = express.Router();
// section will be call by the Front end
const getProducts =async (req, res) =>{
    const products = await Product.find({});
    res.json(products);
}

productRoutes.route('/').get(getProducts);

export default productRoutes;