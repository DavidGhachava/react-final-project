import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTabletCollapsed, setIsTabletCollapsed] = useState(false)

  const location = useLocation()
  const cartLabel = cartCount > 99 ? '99+' : cartCount

  const navItems = [
    { label: 'Workspaces', category: 'Desks' },
    { label: 'Seating', category: 'Chairs' },
    { label: 'Lighting', category: 'Lighting' },
    { label: 'Desk tools', category: 'Accessories' },
    { label: 'Bundles', category: 'Setup' },
  ]

  const selectedCategory = new URLSearchParams(location.search).get('category')

  function getCategoryLinkClass(category) {
    const isActive =
      location.pathname === '/products' && selectedCategory === category

    return isActive ? 'active' : ''
  }

  function closeMobileMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={isTabletCollapsed ? 'navbar tablet-collapsed' : 'navbar'}>
      <div className="logo">
        <Link to="/" aria-label="DeskHaus home">
          <span className="logo-mark" aria-hidden="true">D</span>
          <span>DeskHaus</span>
        </Link>
      </div>

      <div className="mobile-header-actions">
        <Link to="/cart" className="mobile-bag-button" onClick={closeMobileMenu}>
          <span>Bag</span>
          <strong>{cartLabel}</strong>
        </Link>
        <Link to="/products" className="mobile-shop-button" onClick={closeMobileMenu}>
          Shop
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav
        className={isMenuOpen ? 'nav-links open' : 'nav-links'}
        id="primary-navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.category}
            className={getCategoryLinkClass(item.category)}
            to={`/products?category=${item.category}`}
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
        <NavLink to="/about" onClick={closeMobileMenu}>Story</NavLink>
        <NavLink to="/cart" className="mobile-cart-link" onClick={closeMobileMenu}>
          Bag ({cartLabel})
        </NavLink>
      </nav>

      <div className="nav-actions">
        <Link to="/cart" className="cart-button">
          <span>Bag</span>
          <strong>{cartLabel}</strong>
        </Link>

        <Link
          to="/products"
          className={
            location.pathname === '/products' && !selectedCategory
              ? 'nav-button active'
              : 'nav-button'
          }
        >
          Shop
        </Link>
      </div>

      <button
        className="tablet-collapse-toggle"
        type="button"
        aria-label={
          isTabletCollapsed ? 'Expand navigation bar' : 'Collapse navigation bar'
        }
        aria-expanded={!isTabletCollapsed}
        onClick={() => setIsTabletCollapsed((currentValue) => !currentValue)}
      >
        <span aria-hidden="true" />
      </button>
    </header>
  )
}

export default Navbar
