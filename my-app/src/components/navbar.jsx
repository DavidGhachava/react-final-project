import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

function Navbar({ cartCount }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const normalizedSearch = searchTerm.toLowerCase()

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

  function handleSearchClick(product) {
    setSearchTerm('')
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
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            placeholder="Search wood, lamps..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {searchTerm && (
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