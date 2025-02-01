// Reducer/index.jsx

import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice"

const rootReducer = combineReducers({
    cart: cartReducer,
})

export default rootReducer
