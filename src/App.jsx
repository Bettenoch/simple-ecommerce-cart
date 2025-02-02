// App.js

import './App.css';
import Cart from './components/assign/Cart';
import CartDisplay from './components/assign/CartDisplay';
import Products from './components/assign/Products';




function App() {
    return (
        <div className="App">
            <CartDisplay/>
            <Products/>
            <Cart/>
        </div>
    );
}

export default App;
