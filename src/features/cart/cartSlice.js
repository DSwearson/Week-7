import { createSlice, combineReducers } from '@reduxjs/toolkit';

const initialState = {
    value: []
};


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addToCart: (state, action) => {
            console.log("This is the value passing in",action.payload)
            state.value = [...state.value, action.payload]
        },
        emptyCart: (state, action) => {
     
            state.value = []
        }
    }

});

//exporting actions to use
//actions are methods or functions of things you can do
export const { addToCart, emptyCart } = cartSlice.actions;

//this is the assignment for the store
export const selectCart = (state) => state.cart.value;
//this has to match from initial value
// state.[store name][key from initial]


export default cartSlice.reducer;
