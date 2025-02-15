import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")) || []
        : [],
    totalAmount: localStorage.getItem("totalAmount")
        ? JSON.parse(localStorage.getItem("totalAmount")) || 0
        : 0,
    totalItems: localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems")) || 0
        : 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const isPresent = state.cart.find((product) => product.id === action.payload.id)
            if (isPresent) {
                isPresent.quantity += 1;
            } else {
                state.cart.push({...action.payload, quantity: 1})
            }

            state.totalAmount += action.payload.price;
            state.totalItems++

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems)) 
            toast.success("Item added to cart")
        },
        removeProductFromCart: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id === action.payload);

            if (productIndex >= 0) {
                const product = state.cart[productIndex]
                

                if (product.quantity > 1) {
                    product.quantity -= 1
                    
                    state.totalAmount = Math.max(0, state.totalAmount - product.price);
                } else {
                    state.totalAmount = Math.max(0, state.totalAmount - (product.price * product.quantity));
                    
                    state.cart.splice(productIndex, 1)
                }
                state.totalItems--
            }
            state.totalAmount = Math.max(0, state.totalAmount);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems)) 
        },
        removeAllProductInstance: (state, action) => {
            const productId = action.payload;
            const productToRemove = state.cart.find((product) => product.id === productId);
      
            if (productToRemove) {
              const totalProductAmount = productToRemove.price * productToRemove.quantity;
              state.cart = state.cart.filter((product) => product.id !== productId);
              state.totalAmount = Math.max(0, state.totalAmount - totalProductAmount);
              state.totalItems -= productToRemove.quantity;
      
              localStorage.setItem("cart", JSON.stringify(state.cart));
              localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
              localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
              toast.success("All instances of the product have been removed from the cart");
            } else {
              toast.error("Product not found in the cart");
            }
          },
    }
});

export const {addProductToCart, removeProductFromCart, removeAllProductInstance} = cartSlice.actions;
export default cartSlice.reducer;