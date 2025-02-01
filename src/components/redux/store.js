import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
// first create a redux store
export const store = configureStore(
    {
        reducer: {
            cart: cartReducer,

        }
    }
)
export default store;