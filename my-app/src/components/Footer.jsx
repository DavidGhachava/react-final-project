import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [joined, setJoined] = useState(false)
  const [email, setEmail] = useState('')

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    setEmail('')
    setJoined(true)
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="DeskHaus home">
              <span>D</span>
              <strong>DeskHaus</strong>
            </Link>
            <p>
              Minimal workspace essentials for calm, focused rooms that feel
              ready before the work begins.
            </p>
          </div>

          <div className="footer-newsletter">
            <h4>Stay in the loop</h4>
            <p>Product updates, setup ideas, and small workspace notes.</p>

            <form className="newsletter-input" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value)
                  setJoined(false)
                }}
              />
              <button type="submit">Join</button>
            </form>
            {joined && <p className="newsletter-note">Thanks for joining DeskHaus updates.</p>}
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Browse</h4>
            <Link to="/products">All products</Link>
            <Link to="/products?category=Desks">Workspaces</Link>
            <Link to="/products?category=Chairs">Seating</Link>
            <Link to="/products?category=Lighting">Lighting</Link>
          </div>

          <div>
            <h4>DeskHaus</h4>
            <Link to="/about">Story</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>
          </div>

          <div>
            <h4>Setup</h4>
            <Link to="/products?category=Accessories">Desk tools</Link>
            <Link to="/products?category=Setup">Bundles</Link>
            <Link to="/cart">Bag</Link>
          </div>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="5" />
              <circle cx="12" cy="12" r="3.2" />
              <circle cx="16.8" cy="7.2" r="0.8" />
            </svg>
          </a>
          <a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="8" />
              <path d="M10.7 18.5 12 13.9" />
              <path d="M12.2 13.9c2.1.2 3.7-1.1 3.7-3.2 0-2-1.5-3.4-3.8-3.4-2.6 0-4 1.7-4 3.6 0 1.1.4 2 1.3 2.4" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.5 10v8" />
              <path d="M6.5 6.5v.1" />
              <path d="M11 18v-8" />
              <path d="M11 13.4c0-2 1.1-3.4 3.1-3.4 1.9 0 3.4 1.3 3.4 3.8V18" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 DeskHaus. All rights reserved.</p>
        <span>Calm workspace essentials.</span>
      </div>
    </footer>
  )
}

export default Footer
