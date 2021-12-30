import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        products: [],
        cart_quantity: 0,
        total_amt: 0
    },

    reducers: {
        addProduct: (state, action)=>{
            state.cart_quantity += 1;
            state.products.push(action.payload);   //payload will be our new  product
            console.log(action.payload);
            state.total_amt += action.payload.price * action.payload.quantity; 
        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;