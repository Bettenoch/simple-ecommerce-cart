import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from './redux/cartSlice'

const Cart = () => {
    const {cart, totalAmount, totalItems} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
  return (
    <div className='flex flex-col w-full border-solid-[1px]'>
        <h3>Your Shopping List</h3>
        {
            cart.length === 0 ? (
                <p>Your Cart is Empty</p>
            ): (
               <div className='flex flex-col w-full'>
                <div>
                    Products: {totalItems}

                    Amount: {totalAmount}
                </div>
                 <ul>
                    {
                        products.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.name} - {item.price}*{item.quantity}
                                    <button onClick={() => dispatch(removeProductFromCart(item))}>Remove</button>
                                </li>
                            )
                        })
                    }
                </ul>
               </div>
                
            )

        }
        <h3>Total: ${totalAmount}</h3>
      
    </div>
  )
}

export default Cart
