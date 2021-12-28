import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartReducer from "./cartRedux"
import userReducer from "./UserRedux"
 
import {      //imports for persist 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {    //for persist
  key: 'root',
  version: 1,
  storage,
}


const persistedReducer = persistReducer(persistConfig, userReducer) //for persist
                                                         //We want to persist the userReducer

export const store = configureStore({
  reducer: {
      cart: cartReducer,
      user : persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>     //for persist
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),  
})

 export let persistor = persistStore(store) // for persist