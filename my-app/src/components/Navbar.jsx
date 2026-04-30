import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar({ cartCount }) {
  const [isTabletCollapsed, setIsTabletCollapsed] = useState(true)

  const location = useLocation()
  const cartLabel = cartCount > 99 ? '99+' : cartCount

  const navItems = [
    { label: 'Desks', category: 'Desks' },
    { label: 'Chairs', category: 'Chairs' },
    { label: 'Lamps', category: 'Lighting' },
    { label: 'Extras', category: 'Accessories' },
    { label: 'Sets', category: 'Setup' },
  ]

  const selectedCategory = new URLSearchParams(location.search).get('category')

  function getCategoryLinkClass(category) {
    const isActive =
      location.pathname === '/products' && selectedCategory === category

    return isActive ? 'active' : ''
  }

  function collapseNavigation() {
    setIsTabletCollapsed(true)
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
        <Link to="/cart" className="mobile-bag-button" onClick={collapseNavigation}>
          <span>Bag</span>
          <strong>{cartLabel}</strong>
        </Link>
        <Link to="/products" className="mobile-shop-button" onClick={collapseNavigation}>
          Shop
        </Link>
      </div>

      <nav className="nav-links" id="primary-navigation">
        {navItems.map((item) => (
          <Link
            key={item.category}
            className={getCategoryLinkClass(item.category)}
            to={`/products?category=${item.category}`}
            onClick={collapseNavigation}
          >
            {item.label}
          </Link>
        ))}
        <NavLink to="/about" onClick={collapseNavigation}>Story</NavLink>
        <NavLink to="/cart" className="mobile-cart-link" onClick={collapseNavigation}>
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
        aria-controls="primary-navigation"
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
