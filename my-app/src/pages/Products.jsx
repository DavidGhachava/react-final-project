import ProductCard from '../components/ProductCard'
import { useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import chair from '../assets/chair.webp'
import lamp from '../assets/lamp.webp'
import shelf from '../assets/shelf.webp'
import setup from '../assets/setup.webp'
import desk from '../assets/desk.webp'

const products = [
  {
    name: 'Ergo Chair',
    category: 'Chairs',
    price: 149,
    image: chair,
  },
  {
  name: 'Oak Work Desk',
  category: 'Desks',
  price: 299,
  image: desk,
  },
  {
    name: 'Desk Lamp',
    category: 'Lighting',
    price: 59,
    image: lamp,
  },
  {
    name: 'Oak Desk Shelf',
    category: 'Shelves',
    price: 89,
    image: shelf,
  },
  {
    name: 'Full Desk Setup',
    category: 'Setup',
    price: 499,
    image: setup,
  },
]

function Products({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All'
  const [sortOption, setSortOption] = useState('featured')

  const categories = ['All', 'Desks', 'Chairs', 'Lighting', 'Shelves', 'Accessories', 'Setup']

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

  return (
    <section className="products-section">
      <div className="section-header">
        <p>Shop catalog</p>
        <h2>Browse all DeskHaus products.</h2>
      </div>

        <div className="catalog-controls">
  <div className="filter-buttons">
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

  <select
    className="sort-select"
    value={sortOption}
    onChange={(event) => setSortOption(event.target.value)}>
    <option value="featured">Featured</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
    <option value="name">Name: A to Z</option>
  </select>
</div>

      <div className="product-grid">
        {sortedProducts.map((product)  => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default Products