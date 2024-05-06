import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Cart } from './Components/Cart';

function App() {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <Header cart={cart}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
          <Route path='/cart' element={<Cart cart={cart}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
