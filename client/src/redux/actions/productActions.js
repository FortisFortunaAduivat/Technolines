import axios from 'axios'

// import the slice product.js

import {
    setProducts,
    setError,
    setLoading
} from '../slices/products';

// create a trycatch to call the api and dispatch to the api/products using axios
export const getProducts = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const {
            data
        } = await axios.get('/api/products'); // use the proxy in the package.json client and delete http.//localhost:3000
        dispatch(setProducts(data))
    } catch (error) {
        dispatch(setError(
            error.response && error.response.data.error ? error.response.data.error : error.message ? error.message : "An unexpected message has occured. Please try again later."
        ))
    }
};