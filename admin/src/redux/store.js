import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
import productReducer from "./productRedux"

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

const rootReducer = combineReducers({ user: userReducer, product: productReducer})
                                            //We combined both the reducers

const persistedReducer = persistReducer(persistConfig, rootReducer) //for persist
                                                         //We want to persist both the combined reducers

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>     //for persist
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }, 
  }),  
})     

export let persistor = persistStore(store) // for persist