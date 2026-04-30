import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

function Navbar({ cartCount }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTabletCollapsed, setIsTabletCollapsed] = useState(false)

  const searchRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const cartLabel = cartCount > 99 ? '99+' : cartCount

  const navItems = [
    { label: 'Workspaces', category: 'Desks' },
    { label: 'Seating', category: 'Chairs' },
    { label: 'Lighting', category: 'Lighting' },
    { label: 'Desk tools', category: 'Accessories' },
    { label: 'Bundles', category: 'Setup' },
  ]

  const normalizedSearch = searchTerm.toLowerCase().trim()

  const searchResults = products
    .filter((product) =>
      product.name.toLowerCase().includes(normalizedSearch)
    )
    .sort((a, b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()

      const aStarts = aName.startsWith(normalizedSearch)
      const bStarts = bName.startsWith(normalizedSearch)

      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1

      return aName.localeCompare(bName)
    })

  const selectedCategory = new URLSearchParams(location.search).get('category')

  function getCategoryLinkClass(category) {
    const isActive =
      location.pathname === '/products' && selectedCategory === category

    return isActive ? 'active' : ''
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function handleSearchClick(product) {
    setIsSearchOpen(false)
    setSearchTerm('')
    setIsMenuOpen(false)
    navigate(`/products/${product.slug}`)
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
        <div className="search-box" ref={searchRef}>
          <span className="search-icon" aria-hidden="true" />
          <input
            className="search-input"
            type="text"
            placeholder="Search desks, lamps, setup pieces..."
            value={searchTerm}
            onFocus={() => setIsSearchOpen(true)}
            onChange={(event) => {
              setSearchTerm(event.target.value)
              setIsSearchOpen(true)
            }}
          />

          {isSearchOpen && searchTerm && (
            <div className="search-dropdown">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <button
                    key={product.slug}
                    className="search-result"
                    onClick={() => handleSearchClick(product)}
                  >
                    <span>{product.name}</span>
                    <img src={product.image} alt={product.name} />
                  </button>
                ))
              ) : (
                <p className="no-search-results">No products found</p>
              )}
            </div>
          )}
        </div>

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
