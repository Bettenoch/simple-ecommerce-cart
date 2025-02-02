import React from 'react'
import { ProductList } from '../data'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  

  return (
    <ul className='w-full p-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        ProductList.map((item) => {
          return (
            <li key={item.id} className='flex flex-col w-full items-center justify-center'>
              <figure>
                <img src={item.image} alt={item.name} className="w-32 h-32 rounded-lg shadow-lg"/>
              </figure>
              <figcaption>
                <ul>
                  <li>
                  <h2 className='text-3xl font-semibold text-amber-50'>{item.name}</h2>
                  </li>
                  <li className=''>Amount<span className='text-2xl font-light text-cyan-100'>{item.price}</span></li>
                </ul>
              </figcaption>
              <button onClick={() => dispatch(addProductToCart(item))}>Add to Cart</button>

      


            </li>
          )
        })
      }
    </ul>
  )
}

export default Products
