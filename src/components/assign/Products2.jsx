// components/Products.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/cartSlice';
import { ProductList } from '../data';
import SearchBar from './SearchBar';
import "../../products.css";

const Products2 = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.toLowerCase());

  const filteredProducts = ProductList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="product-container">
      <SearchBar />
      <div className="product-holder">
        <div className="product-title">
          <h1>GET YOUR FAVOURITE PRODUCTS</h1>
        </div>
        <ul className="product-display">
          {filteredProducts.map((item) => (
            <li key={item.id} className="item-main">
              <div className="item-card">
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-img"
                    width={200}
                    height={200}
                  />
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products2;
