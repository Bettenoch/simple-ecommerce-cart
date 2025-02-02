import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import '../../cart_display.css'

const CartDisplay = () => {
    const {totalItems} = useSelector((state) => state.cart)
  return (
    <div className='Cart-Items'>
        <div className='cart-banner'>
            <FaCartArrowDown size={40} className='cart-img' /> <span className='item-number'>({totalItems})</span>
        </div>
      
    </div>
  )
}

export default CartDisplay
