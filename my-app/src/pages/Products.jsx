import ProductCard from '../components/ProductCard'
import { useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'

const categories = ['All', 'Desks', 'Chairs', 'Lighting', 'Accessories', 'Setup']

const categoryCopy = {
  All: 'Every DeskHaus piece in one calm, scrollable catalog.',
  Desks: 'Warm work surfaces for focused rooms and daily routines.',
  Chairs: 'Supportive seating that still feels soft at home.',
  Lighting: 'Task lighting for clear mornings and slower evenings.',
  Accessories: 'Small upgrades that keep the surface useful and clean.',
  Setup: 'Complete combinations for a desk that feels ready now.',
}

function Products({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All'
  const [sortOption, setSortOption] = useState('featured')

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price
    if (sortOption === 'price-high') return b.price - a.price
    if (sortOption === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  const productLabel = sortedProducts.length === 1 ? 'product' : 'products'

  return (
    <section className="products-section catalog-page">
      <div className="catalog-hero">
        <div className="section-header catalog-heading">
          <p>Shop catalog</p>
          <h2>Browse all DeskHaus products.</h2>
        </div>

        <div className="catalog-summary">
          <span>{products.length} essentials</span>
          <span>Free layout pairings</span>
          <span>Ships in 3-5 days</span>
        </div>
      </div>

      <div className="catalog-controls">
        <div>
          <p className="catalog-results-label">
            Showing {sortedProducts.length} {productLabel}
          </p>
          <h3>{selectedCategory === 'All' ? 'All products' : selectedCategory}</h3>
          <p className="catalog-results-copy">
            {categoryCopy[selectedCategory] || categoryCopy.All}
          </p>
        </div>

        <select
          className="sort-select"
          value={sortOption}
          aria-label="Sort products"
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <div className="filter-buttons catalog-filter-buttons" aria-label="Product categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? 'filter-button active'
                : 'filter-button'
            }
            onClick={() =>
              category === 'All'
                ? setSearchParams({})
                : setSearchParams({ category })
            }
          >
            {category}
          </button>
        ))}
      </div>

      {sortedProducts.length > 0 ? (
        <div className={`product-grid catalog-grid ${sortedProducts.length < 3 ? 'compact' : ''}`}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="catalog-empty">
          <span>No products found</span>
          <h3>This shelf is clear for now.</h3>
          <p>Try another category or jump back to the full DeskHaus catalog.</p>
          <button type="button" className="primary-button" onClick={() => setSearchParams({})}>
            View all products
          </button>
        </div>
      )}
    </section>
  )
}

export default Products
