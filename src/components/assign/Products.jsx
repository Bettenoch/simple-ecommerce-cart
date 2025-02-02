import React from "react";
import "../../products.css";
import { ProductList } from "../data";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cartSlice";
import CartDisplay from "./CartDisplay";

export default function Products() {
  const dispatch = useDispatch();
  return (
    <section className="product-container">
      
      <div className="product-holder">
      
        <div className="product-title">
          <h1>GET YOUR FAVOURITE PRODUCTS</h1>
        </div>
        <ul className="product-display">
          {ProductList.map((item) => {
            return (
              <li key={item.id} className="item-main">
               <div className="item-card">
               <figure>
                  <img src={item.image} alt={item.name} className="item-img" width={200}
                            height={200}/>
                </figure>
                <figcaption className="fig-caption">
                  <ul>
                    <li>
                      <h2 className="item-name">{item.name}</h2>
                    </li>
                    <li className="item-price">
                      Amount
                      <span className="item-price">{item.price}</span>
                    </li>
                  </ul>
                </figcaption>
                <button
                  className="item-btn"
                  onClick={() => dispatch(addProductToCart(item))}
                >
                  Add to Cart
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
