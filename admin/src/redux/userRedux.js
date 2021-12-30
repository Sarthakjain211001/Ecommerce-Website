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
        },
        loginSuccess :(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure :(state)=>{
            state.isFetching = false;
            state.error = true
        }
    }
})

export const { loginStart, loginSuccess, loginFailure} = userSlice.actions    //actions
export default userSlice.reducer;
