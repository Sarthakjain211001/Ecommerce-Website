import { createSlice, configureStore } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user", 

    initialState : {               //state
        currentUser : null,
        isFetching : false,
        error : false
    },

    reducers: {                    // to define what has to be done on which action
        loginStart : (state)=>{
            state.isFetching = true    //change isFetching state variable to true
            state.error = false
        },
        loginSuccess :(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
            state.error = false
        },
        loginFailure :(state)=>{
            state.isFetching = false;
            state.error = true
        },

        registerStart : (state)=>{
            state.isFetching = true    //change isFetching state variable to true
        },
        registerSuccess :(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        registerFailure :(state)=>{
            state.isFetching = false;
            state.error = true
        },
        
        logout : (state)=>{
            state.isFetching = false;
            state.error = false;
            state.currentUser = null;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout} = userSlice.actions    //actions
export default userSlice.reducer;