import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'

function App() {
  const [cartCount, setCartCount] = useState(0)

  function handleAddToCart() {
    setCartCount(cartCount + 1)
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <ProductGrid onAddToCart={handleAddToCart} />
    </>
  )
}

export default App