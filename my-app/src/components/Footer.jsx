function Footer() {
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
            <a href="#">Desks</a>
            <a href="#">Chairs</a>
            <a href="#">Lighting</a>
            <a href="#">Accessories</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay updated</h4>
          <p>Get product updates and offers.</p>

          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button>Join</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DeskHaus. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer