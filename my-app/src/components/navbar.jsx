import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">DeskHaus</Link>
      </div>

      <nav className="nav-links">
  <Link to="/products?category=Desks">Desks</Link>
  <Link to="/products?category=Chairs">Chairs</Link>
  <Link to="/products?category=Lighting">Lighting</Link>
  <Link to="/products?category=Accessories">Accessories</Link>
  <Link to="/about">About</Link>
</nav>

      <div className="nav-actions">
        <input
          className="search-input"
          type="text"
          placeholder="Search wood, lamps..."
        />

        <Link to="/cart" className="cart-button">Cart {cartCount}</Link>

        <Link to="/products" className="nav-button">
          Shop
        </Link>
      </div>
    </header>
  )
}

export default Navbar