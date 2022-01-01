import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "product", 

    initialState : {               
        products : null,
        isFetching : false,
        error : false
    },
    reducers: {    
        //GET                
       getProductStart: (state)=>{
           state.isFetching = true;
           state.error = false;
       },
       getProductSuccess: (state, action)=>{
        state.isFetching = false;
        state.products = action.payload;
       },
       getProductFailure: (state)=>{
        state.isFetching = false;
        state.error = true;
       },

       //DELETE
       deleteProductStart: (state)=>{
        state.isFetching = true;
        state.error = false;
       },
       deleteProductSuccess: (state, action)=>{
        state.isFetching = false;
        state.products.splice(            //splice is an array method. It takes 2 integers.   array.splice(3,2) . Means that from index no. 3 it will delete 2 items
            state.products.findIndex((item) => item._id===action.payload),  //index no.
            1             //1 item to be delted.
        )
       },
       deleteProductFailure: (state)=>{
           state.isFetching = false;
           state.error = true
       },

       //UPDATE
       updateProductStart: (state)=>{
        state.isFetching = true;
        state.error = false;
       },
       updateProductSuccess: (state, action)=>{
        state.isFetching = false;
        state.products[state.products.findIndex((item) => item._id===action.payload.id)] = action.payload.product; 
      //original array                  // index no. which we want to update                   //new data which we want to put at that index

      //[4,5,6,7,8][2] = 10   => new array: [4,5,10,7,8]
       },
       updateProductFailure: (state)=>{
           state.isFetching = false;
           state.error = true
       },

       //ADD
       addProductStart: (state)=>{
        state.isFetching = true;
        state.error = false;
       },
       addProductSuccess: (state, action)=>{
        state.isFetching = false;
        state.products.push(action.payload);
       },
       addProductFailure: (state)=>{
           state.isFetching = false;
           state.error = true
       }
    }
})

export const { 
    getProductStart,
     getProductSuccess, 
     getProductFailure, 
     deleteProductStart, 
     deleteProductSuccess, 
     deleteProductFailure, 
     updateProductStart, 
     updateProductSuccess, 
     updateProductFailure, 
     addProductStart, 
     addProductSuccess, 
     addProductFailure
    } = productSlice.actions    

    export default productSlice.reducer;
