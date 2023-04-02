import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

// import our Routes
import productRoutes from './routes/productRoutes.js';
dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());

// create a connection to the port

const port = process.env.PORT || 5000;

//if API is hit then retrieve the productRoutes
app.use('/api/products', productRoutes);

// use a listener
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
