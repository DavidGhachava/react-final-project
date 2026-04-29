import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [joined, setJoined] = useState(false)

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    setJoined(true)
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>DeskHaus</h2>
          <p>Minimal workspace essentials for focused setups.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <Link to="/products?category=Desks">Desks</Link>
            <Link to="/products?category=Chairs">Chairs</Link>
            <Link to="/products?category=Lighting">Lighting</Link>
            <Link to="/products?category=Accessories">Accessories</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/about#materials">Materials</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Support</h4>
            <Link to="/support#shipping">Shipping</Link>
            <Link to="/support#returns">Returns</Link>
            <Link to="/support#faq">FAQ</Link>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay updated</h4>
          <p>Get product updates and workspace ideas.</p>

          <form className="newsletter-input" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Your email" aria-label="Email address" />
            <button type="submit">Join</button>
          </form>
          {joined && <p className="newsletter-note">Thanks for joining DeskHaus updates.</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 DeskHaus. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
