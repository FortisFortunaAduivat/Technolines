import {
    createSlice
} from "@reduxjs/toolkit";

// create initial Slice with objects to pass in reducer

export const initialState = {
    loading: false,
    error: false,
    products: [],
}
// pass objects above to the reducer with a setError for example, and it will return the previous state with the error state updated.

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setProducts: (state, {
            payload
        }) => {
            state.loading = false;
            state.error = null;
            state.products = payload
        },
        setError: (state, {
            payload
        }) => {
            state.error = payload;
            state.loading = false;

        },
    },
});

// export reducer objects 
export const {
    setError,
    setLoading,
    setProducts
} = productsSlice.actions;

export default productsSlice.reducer;

export const productsSelector = (state) => state.products;