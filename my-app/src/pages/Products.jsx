import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import ProductCard from '../components/ProductCard'
import { getProductBySlug, products } from '../data/products'

const categories = [
  { label: 'All', value: 'All' },
  { label: 'Workspaces', value: 'Desks' },
  { label: 'Seating', value: 'Chairs' },
  { label: 'Lighting', value: 'Lighting' },
  { label: 'Desk tools', value: 'Accessories' },
  { label: 'Bundles', value: 'Setup' },
]

const categoryCopy = {
  All: 'Every piece in the DeskHaus edit, sorted for calm setup building.',
  Desks: 'Warm work surfaces for focused rooms and daily routines.',
  Chairs: 'Supportive seating that still feels soft at home.',
  Lighting: 'Task lighting for clear mornings and slower evenings.',
  Accessories: 'Small upgrades that keep the surface useful and clean.',
  Setup: 'Complete combinations for a desk that feels ready now.',
}

const featuredBundle = getProductBySlug('full-desk-setup')

function Products({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All'
  const [sortOption, setSortOption] = useState('featured')
  const [catalogSearch, setCatalogSearch] = useState('')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = catalogSearch.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const searchableText = [
        product.name,
        product.category,
        product.description,
        product.finish,
        product.materials,
      ]
        .join(' ')
        .toLowerCase()

      return matchesCategory && searchableText.includes(normalizedSearch)
    })
  }, [catalogSearch, selectedCategory])

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price
      if (sortOption === 'price-high') return b.price - a.price
      if (sortOption === 'name') return a.name.localeCompare(b.name)
      return Number(b.featured) - Number(a.featured)
    })
  }, [filteredProducts, sortOption])

  const productLabel = sortedProducts.length === 1 ? 'piece' : 'pieces'
  const selectedLabel =
    categories.find((category) => category.value === selectedCategory)?.label ||
    'All'

  function handleCategoryChange(category) {
    category === 'All'
      ? setSearchParams({})
      : setSearchParams({ category })
  }

  function handleResetFilters() {
    setSearchParams({})
    setCatalogSearch('')
    setSortOption('featured')
  }

  return (
    <main className="products-section catalog-page">
      <section className="catalog-studio-hero">
        <div className="catalog-title-block">
          <div className="catalog-eyebrow">
            <span>Shop catalog</span>
            <strong>{products.length} edited essentials</strong>
          </div>
          <h1>Build from the pieces that make the desk feel settled.</h1>
        </div>

        {featuredBundle && (
          <article className="catalog-feature">
            <img src={featuredBundle.image} alt={featuredBundle.name} />
            <div className="catalog-feature-copy">
              <span>Featured bundle</span>
              <h2>{featuredBundle.name}</h2>
              <p>{featuredBundle.description}</p>
              <div>
                <strong>${featuredBundle.price}</strong>
                <button type="button" onClick={() => onAddToCart(featuredBundle)}>
                  Add bundle
                </button>
              </div>
            </div>
          </article>
        )}
      </section>

      <section className="catalog-workbench" aria-label="Catalog controls">
        <div className="catalog-tabs" aria-label="Product categories">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={
                selectedCategory === category.value
                  ? 'catalog-tab active'
                  : 'catalog-tab'
              }
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="catalog-tools">
          <label className="catalog-search">
            <span>Search catalog</span>
            <input
              type="search"
              placeholder="Lamp, oak, chair..."
              value={catalogSearch}
              onChange={(event) => setCatalogSearch(event.target.value)}
            />
          </label>

          <label className="catalog-sort">
            <span>Sort</span>
            <select
              value={sortOption}
              aria-label="Sort products"
              onChange={(event) => setSortOption(event.target.value)}
            >
              <option value="featured">Featured first</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>
      </section>

      <section className="catalog-results-shell">
        <div className="catalog-results-bar">
          <div>
            <p>{selectedLabel}</p>
            <h2>{sortedProducts.length} {productLabel} found</h2>
            <span>{categoryCopy[selectedCategory] || categoryCopy.All}</span>
          </div>

          {(selectedCategory !== 'All' || catalogSearch || sortOption !== 'featured') && (
            <button type="button" onClick={handleResetFilters}>
              Reset view
            </button>
          )}
        </div>

        {sortedProducts.length > 0 ? (
          <div className={`product-grid catalog-grid ${sortedProducts.length < 3 ? 'compact' : ''}`}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.slug}
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
            <span>No pieces found</span>
            <h3>This setup path is clear for now.</h3>
            <p>Try another category, clear search, or return to the full catalog.</p>
            <button type="button" className="primary-button" onClick={handleResetFilters}>
              Reset catalog
            </button>
          </div>
        )}
      </section>

      <section className="catalog-service-strip">
        <span>Dispatch estimates on product pages</span>
        <span>Setup-ready packaging</span>
        <span>Free layout pairings</span>
        <Link to="/about">Read the DeskHaus story</Link>
      </section>
    </main>
  )
}

export default Products
