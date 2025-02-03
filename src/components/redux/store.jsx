import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import searchReducer from './searchSlice';
// first create a redux store
export const store = configureStore(
    {
        reducer: {
            cart: cartReducer,
            search: searchReducer,

        }
    }
)
export default store;