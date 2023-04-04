//create the store by import files from the slice folder into the Reducer

import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit';

// import product from the slices folder
import products from './slices/products';

const reducer = combineReducers({
    products
});

export default configureStore({
    reducer,
});