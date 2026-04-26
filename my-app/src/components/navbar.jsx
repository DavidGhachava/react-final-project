import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">DeskHaus</Link>
      </div>

      <nav className="nav-links">
        <Link to="/products">Desks</Link>
        <Link to="/products">Chairs</Link>
        <Link to="/products">Lighting</Link>
        <Link to="/products">Accessories</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="nav-actions">
        <input
          className="search-input"
          type="text"
          placeholder="Search wood, lamps..."
        />

        <button className="cart-button">Cart {cartCount}</button>

        <Link to="/products" className="nav-button">
          Shop
        </Link>
      </div>
    </header>
  )
}

export default Navbar