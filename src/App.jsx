import './App.css'
import Products from './components/products/Products'
import Cart from './components/Cart'

function App() {


  return (
    <>
      <section className='w-full flex flex-col min-h-screen'>
       <div className='bg-amber-300 flex flex-col'>
       <h1 className='text-7xl font-extrabold text-gray-950 mb-8'>CHOOSE YOUR PRODUCTS TODAY</h1>
       </div>
       <div className='flex w-full flex-col'>
       <Products/>
       <Cart/>
       </div>
       

      </section>
    </>
  )
}

export default App
