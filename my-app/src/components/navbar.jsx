import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

function Navbar({ cartCount }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const searchRef = useRef(null)
  const navigate = useNavigate()

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
    navigate(`/products?category=${product.category}`)
  }

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
        <div className="search-box" ref={searchRef}>
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
          Cart {cartCount}
        </Link>

        <Link to="/products" className="nav-button">
          Shop
        </Link>
      </div>
    </header>
  )
}

export default Navbar