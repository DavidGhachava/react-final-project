import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import setup from '../assets/setup.webp'
import workspaceDetail from '../assets/workspace-detail.webp'
import { getProductBySlug } from '../data/products'

const setupPaths = [
  {
    label: 'Focus setup',
    title: 'Start with the surface',
    text: 'A warm desk and shelf base for quiet daily work.',
    path: '/products?category=Desks',
  },
  {
    label: 'Long sessions',
    title: 'Add support without office energy',
    text: 'Seating that feels soft at home and steady through the day.',
    path: '/products?category=Chairs',
  },
  {
    label: 'Evening desk',
    title: 'Tune the room with warm light',
    text: 'Compact lighting for slower starts and late finishes.',
    path: '/products?category=Lighting',
  },
  {
    label: 'Full refresh',
    title: 'Bring the whole setup together',
    text: 'A complete bundle for a room that needs one clean decision.',
    path: '/products?category=Setup',
  },
]

const bundleItems = [
  'Oak Work Desk',
  'Ergo Chair',
  'Oak Desk Shelf',
  'Desk Lamp',
]

const trustItems = [
  {
    index: '01',
    title: 'Calm by default',
    text: 'Quiet shapes, warm materials, and no visual noise fighting for attention.',
  },
  {
    index: '02',
    title: 'Built around routines',
    text: 'Work surface, seating, light, and storage chosen as one usable system.',
  },
  {
    index: '03',
    title: 'Useful before decorative',
    text: 'Every piece earns its place through comfort, order, or better focus.',
  },
]

const setupBundle = getProductBySlug('full-desk-setup')

function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <section className="home-section setup-path-section">
        <div className="home-panel-heading">
          <div>
            <p className="section-kicker">What are you building?</p>
            <h2>Choose a starting point, then refine the setup.</h2>
          </div>
          <Link to="/products" className="home-pill-link">
            View all products
          </Link>
        </div>

        <div className="setup-path-grid">
          {setupPaths.map((path) => (
            <Link to={path.path} className="setup-path-card" key={path.label}>
              <span>{path.label}</span>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="home-product-shelf">
        <ProductGrid onAddToCart={onAddToCart} />
      </div>

      <section className="home-section setup-bundle" id="setup-bundle">
        <div className="setup-bundle-content">
          <p className="section-kicker">Featured bundle</p>
          <h2>One calm desk, built from the essentials.</h2>
          <p>
            Pair the oak desk, shelf, ergonomic chair, and soft lamp for a
            complete workspace that feels finished from day one.
          </p>

          <div className="bundle-list">
            {bundleItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
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
          <div className="bundle-image-card">
            <span>Bundle value</span>
            <strong>4-piece setup</strong>
          </div>
        </div>
      </section>

      <section className="home-section material-story">
        <div className="material-story-image">
          <img src={workspaceDetail} alt="Warm desk detail with workspace materials" />
        </div>

        <div className="material-story-content">
          <p className="section-kicker">Design language</p>
          <h2>Everything on your desk should earn its place.</h2>
          <p>
            We keep the shapes simple, the materials tactile, and the palette
            quiet so the room feels ready before the work begins.
          </p>

          <div className="material-note">
            <span>Oak finish</span>
            <strong>Warm, matte, easy to pair.</strong>
          </div>
        </div>
      </section>

      <section className="home-section trust-section">
        <div className="home-panel-heading">
          <div>
            <p className="section-kicker">Why DeskHaus</p>
            <h2>Premium without making your desk feel precious.</h2>
          </div>
        </div>

        <div className="trust-grid">
          {trustItems.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

      </section>
    </>
  )
}

export default Home
