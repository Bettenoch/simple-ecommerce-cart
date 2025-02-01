// App.js

import './App.css';
import { Route, Routes } from "react-router-dom";
import Cart from './components/practice/Cart';
import Home from './components/practice/Home';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
