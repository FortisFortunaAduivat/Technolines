import mongoose from "mongoose";

// create a schema for the product reviews

const reviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {
    timestamps: true
});

// create a schema for the products

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: {
        reviewsSchema
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    productIsNew: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

// need to push the product to the model
const Product = mongoose.model("Product", productSchema);
export default Product;