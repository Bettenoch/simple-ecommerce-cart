import { createSlice } from "@reduxjs/toolkit";

const loadItemsFromLocalStorage = () => {
    const cartItems = localStorage.getItem("cart")
    return cartItems ? JSON.parse(cartItems) : { products: [], totalAmount: 0 };
}

const cartSlice = createSlice({
    name: "cart",
    initialState: loadItemsFromLocalStorage,
    reducers: {
        addProductToCart: (state, action) => {
            const isProduct = state.products.find((product) => product.id === action.payload.id)
            if (isProduct) {
                isProduct.quantity += 1;
            } else {
                state.products.push({...action.payload, quantity: 1})
            }

            state.totalAmount += action.payload.price;

            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeProductFromCart: (state, action) => {
            const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

            if (productIndex != -1) {
                product = state.products[productIndex]
                state.totalAmount -= product.price

                if (product.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.products.splice(productIndex, 1)
                }
            }
            localStorage.setItem("cart", JSON.stringify(state));

        }

    }
});

export const {addProductToCart, removeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;