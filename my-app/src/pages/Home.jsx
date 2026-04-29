import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import chair from '../assets/chair.webp'
import desk from '../assets/desk.webp'
import lamp from '../assets/lamp.webp'
import setup from '../assets/setup.webp'
import shelf from '../assets/shelf.webp'
import woodMaterial from '../assets/wood-material.webp'
import workspaceDetail from '../assets/workspace-detail.webp'
import { getProductBySlug } from '../data/products'

const categories = [
  {
    title: 'Desks',
    text: 'Work surfaces with warm wood, clean lines, and room to breathe.',
    image: desk,
    path: '/products?category=Desks',
  },
  {
    title: 'Chairs',
    text: 'Supportive seating for long workdays without the office look.',
    image: chair,
    path: '/products?category=Chairs',
  },
  {
    title: 'Lighting',
    text: 'Soft task lighting that makes late sessions feel calmer.',
    image: lamp,
    path: '/products?category=Lighting',
  },
  {
    title: 'Accessories',
    text: 'Small upgrades that keep your workspace clear and intentional.',
    image: shelf,
    path: '/products?category=Accessories',
  },
]

const setups = [
  'Minimal focus setup',
  'Warm evening setup',
  'Small apartment setup',
  'Creator desk setup',
]

const setupBundle = getProductBySlug('full-desk-setup')

function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <section className="home-section category-section">
        <div className="section-header home-section-header">
          <p>Shop by category</p>
          <h2>Start with the piece your desk is missing.</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link to={category.path} className="category-card" key={category.title}>
              <img src={category.image} alt={category.title} />
              <div>
                <span>{category.title}</span>
                <p>{category.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ProductGrid onAddToCart={onAddToCart} />

      <section className="home-section lifestyle-section">
        <div className="lifestyle-image">
          <img src={workspaceDetail} alt="Warm desk detail with workspace materials" />
        </div>

        <div className="lifestyle-content">
          <p className="section-kicker">Designed to feel settled</p>
          <h2>Everything on your desk should earn its place.</h2>
          <p>
            We keep the shapes simple, the materials tactile, and the palette
            quiet so your workspace feels ready before the work begins.
          </p>

          <div className="setup-tags">
            {setups.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section setup-bundle" id="setup-bundle">
        <div className="setup-bundle-content">
          <p className="section-kicker">Featured setup</p>
          <h2>One calm desk, built from the essentials.</h2>
          <p>
            Pair the oak desk, shelf, ergonomic chair, and soft lamp for a
            complete workspace that feels finished from day one.
          </p>

          <div className="bundle-list">
            <span>Oak Work Desk</span>
            <span>Ergo Chair</span>
            <span>Oak Desk Shelf</span>
            <span>Desk Lamp</span>
          </div>

          <div className="bundle-actions">
            <strong>$499</strong>
            <button
              className="primary-button"
              type="button"
              onClick={() => onAddToCart(setupBundle)}
            >
              Add setup to cart
            </button>
          </div>
        </div>

        <div className="setup-bundle-image">
          <img src={setup} alt="Complete DeskHaus workspace setup" />
        </div>
      </section>

      <section className="home-section trust-section">
        <div className="trust-intro">
          <p className="section-kicker">Why DeskHaus</p>
          <h2>Premium without making your desk feel precious.</h2>
        </div>

        <div className="trust-grid">
          <article>
            <span>01</span>
            <h3>Solid materials</h3>
            <p>Warm wood, powder-coated details, and durable surfaces for everyday use.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Calm design</h3>
            <p>Neutral pieces that fit together without making your room feel staged.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Built for daily work</h3>
            <p>Comfort, storage, and lighting chosen for real routines, not showroom corners.</p>
          </article>
        </div>

        <div className="material-strip">
          <img src={woodMaterial} alt="Close view of oak workspace material" />
        </div>
      </section>
    </>
  )
}

export default Home
