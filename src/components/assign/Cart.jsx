import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../cart.css";
import { addProductToCart, removeAllProductInstance, removeProductFromCart } from "../redux/cartSlice";

export default function Cart() {
  const { cart, totalItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <section className="cart-container">
      <div className="cart-box">
        <h1>CART ITEMS ({totalItems})</h1>
        <div className="cart-header">
          <h2 className="cart-title">Find your products below</h2>
          <div>
            <h3>TOTAL: ${totalAmount}</h3>
          </div>
        </div>
        <ul className="cart-holder">
          {cart.map((product, index) => {
            return (
              <li key={index} className="product-card">
                <div className="product-img">
                  <img
                    src={product.image}
                    alt={product.name}
                    
                    className="card-image"
                  />
                </div>
                <div className="product-details">
                  <p className="product-name">{product.name} ({product.quantity})</p>
                
                </div>
                <div className="btn-list">
                <button
                  className="minus-btn"
                  onClick={() => dispatch(removeProductFromCart(product.id))}
                >
                  -
                </button>
                <button
                  className="add-btn"
                  onClick={() => dispatch(addProductToCart(product))}
                >
                  +
                </button>
                <button
                className="remove-all"
                onClick={() => dispatch(removeAllProductInstance(product.id))}
                >
                  Remove All

                </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
