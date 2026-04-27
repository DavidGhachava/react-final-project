import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])

  function handleAddToCart(product) {
    setCartItems([...cartItems, product])
  }

  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  )
}

export default App