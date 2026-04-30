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

const standards = [
  {
    index: '01',
    title: 'Quiet from across the room',
    text: 'No loud silhouettes, glossy finishes, or pieces that make the desk feel staged.',
    proof: 'Low visual noise',
  },
  {
    index: '02',
    title: 'Useful at arm’s length',
    text: 'Surfaces, seating, light, and storage are chosen by reach, routine, and daily comfort.',
    proof: 'Built for use',
  },
  {
    index: '03',
    title: 'Easy to add, easy to live with',
    text: 'Every item can work alone, but the edit is designed to feel better as a complete setup.',
    proof: 'Setup-ready',
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
        <div className="standards-board">
          <div className="standards-lead">
            <p className="section-kicker">DeskHaus standard</p>
            <h2>Premium without making your desk feel precious.</h2>
            <Link to="/about" className="standards-link">
              Read the story
            </Link>
          </div>

          <div className="standards-list" aria-label="DeskHaus product standards">
            {standards.map((item) => (
              <article key={item.index} className="standard-row">
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.proof}</strong>
              </article>
            ))}
          </div>

          <div className="standards-note" aria-label="DeskHaus edit note">
            <span>Current edit</span>
            <strong>5 pieces</strong>
            <p>
              A short catalog on purpose: desk, chair, light, shelf, and one
              complete bundle.
            </p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home
