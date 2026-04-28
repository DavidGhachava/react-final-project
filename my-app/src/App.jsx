import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function handleAddToCart(product) {
    setCartItems((currentItems) => [...currentItems, product])
  }

  function handleIncreaseQuantity(productName) {
    setCartItems((currentItems) => {
      const productToDuplicate = currentItems.find(
        (item) => item.name === productName
      )

      if (!productToDuplicate) return currentItems

      return [...currentItems, productToDuplicate]
    })
  }

  function handleDecreaseQuantity(productName) {
    let removed = false

    setCartItems((currentItems) =>
      currentItems.filter((item) => {
        if (!removed && item.name === productName) {
          removed = true
          return false
        }

        return true
      })
    )
  }

  function handleRemoveProduct(productName) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.name !== productName)
    )
  }

  function handleClearCart() {
    setCartItems([])
  }

  return (
    <>
      <ScrollToTop />
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onRemoveProduct={handleRemoveProduct}
              onClearCart={handleClearCart}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
