import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

function Navbar({ cartCount }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const searchRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

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
    function handleScroll() {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    navigate(`/products/${product.slug}`)
  }

  return (
    <header className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="logo">
        <Link to="/">DeskHaus</Link>
      </div>

      <nav className="nav-links">
        <Link className={getCategoryLinkClass('Desks')} to="/products?category=Desks">
          Desks
        </Link>
        <Link className={getCategoryLinkClass('Chairs')} to="/products?category=Chairs">
          Chairs
        </Link>
        <Link className={getCategoryLinkClass('Lighting')} to="/products?category=Lighting">
          Lighting
        </Link>
        <Link className={getCategoryLinkClass('Accessories')} to="/products?category=Accessories">
          Accessories
        </Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="mobile-cart-link">
          Cart ({cartCount})
        </NavLink>
      </nav>

      <div className="nav-actions">
        <div className="search-box" ref={searchRef}>
          <span className="search-icon" aria-hidden="true" />
          <input
            className="search-input"
            type="text"
            placeholder="Search wood, lamps..."
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
                    key={product.name}
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
          <span>Cart</span>
          <strong>{cartCount}</strong>
        </Link>

        <NavLink to="/products" end className="nav-button">
          Shop
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
