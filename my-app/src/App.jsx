import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

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
      <Footer />
    </>
  )
}

export default App