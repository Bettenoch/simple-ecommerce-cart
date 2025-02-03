// App.js

import './App.css';
import Cart from './components/assign/Cart';
import CartDisplay from './components/assign/CartDisplay';
import Products2 from './components/assign/Products2';
//import Products from './components/assign/Products';


function App() {
    return (
        <div className="App">
            <CartDisplay/>
            <Products2/>
            <Cart/>
        </div>
    );
}

export default App;
