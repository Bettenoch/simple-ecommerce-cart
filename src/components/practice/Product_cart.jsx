// Components/Product_cart.jsx

import React from 'react'

import { useDispatch } from 'react-redux'; 
import { addToCart } from './CartSlice';

const Product_card = ({ dataObj }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        console.log("dispatching add to cart")
        dispatch(addToCart(dataObj)); 
        return;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '70px',
                justifyContent: 'space-around',
                marginTop: '70px'
            }}
        >
            <div
                style={{
                    width: "15em",
                    backgroundColor: "#35D841",
                    padding: 2,
                    borderRadius: 10,
                    marginBlock: 10,
                }}
            >
                <p style={{ fontSize: 20, color: 'black' }}>{dataObj.title}</p>
                <img src={dataObj.image} alt="" height={200} width={200} />
                <p>{dataObj.description}</p>
                <button
                    onClick={handleAddToCart}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product_card
