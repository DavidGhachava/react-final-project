import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import lamp from '../assets/lamp.webp'
import shelf from '../assets/shelf.webp'
import setup from '../assets/setup.webp'

const heroProducts = [
  {
    name: 'Desk Lamp',
    category: 'Lighting',
    price: 59,
    image: lamp,
  },
  {
    name: 'Oak Desk Shelf',
    category: 'Desk tool',
    price: 89,
    image: shelf,
  },
  {
    name: 'Full Desk Setup',
    category: 'Bundle',
    price: 499,
    image: setup,
  },
]

const heroStats = ['5 curated pieces', 'Bundle-ready setups', 'Delivery estimates at checkout']

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
        <div className="hero-eyebrow">
          <span>DeskHaus edit</span>
          <strong>2026 workspace essentials</strong>
        </div>

        <h1>Build a workspace that feels finished from day one.</h1>
        <p className="hero-text">
          Calm desks, seating, lighting, and desk tools selected to work
          together without making your room feel staged.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="primary-button">
            Shop the edit
          </Link>
          <a href="#setup-bundle" className="secondary-button">
            View bundle
          </a>
        </div>

        <div className="hero-stats" aria-label="DeskHaus store highlights">
          {heroStats.map((item) => (
            <span key={item}>{item}</span>
          ))}
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
          <div>
            <span>{currentProduct.category}</span>
            <strong>{currentProduct.name}</strong>
          </div>
          <b>${currentProduct.price}</b>
        </div>

        <div className="hero-dots" aria-label="Featured setup selector">
          {heroProducts.map((product, index) => (
            <button
              key={product.name}
              className={index === currentIndex ? 'active' : ''}
              type="button"
              aria-label={`Show ${product.name}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
