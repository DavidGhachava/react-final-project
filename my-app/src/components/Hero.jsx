import { useEffect, useState } from 'react'

import lamp from '../assets/lamp.webp'
import shelf from '../assets/shelf.webp'
import setup from '../assets/setup.webp'

const heroProducts = [
  {
    name: 'Desk Lamp',
    price: 59,
    image: lamp,
  },
  {
    name: 'Oak Desk Shelf',
    price: 89,
    image: shelf,
  },
  {
    name: 'Full Desk Setup',
    price: 499,
    image: setup,
  },
]

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroProducts.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentProduct = heroProducts[currentIndex]

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">Premium workspace essentials</p>
        <h1>Build a desk setup that actually feels good to use.</h1>
        <p className="hero-text">
          Minimal desks, lighting, and accessories designed for clean,
          focused workspaces.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">Shop collection</button>
          <button className="secondary-button">Explore setups</button>
        </div>
      </div>

      <div className="hero-card">
        <img
  key={currentProduct.name}
  className="hero-image"
  src={currentProduct.image}
  alt={currentProduct.name}
/>

        <div className="product-preview">
          <span>{currentProduct.name}</span>
          <strong>${currentProduct.price}</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero