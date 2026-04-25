import ProductCard from './ProductCard'

import chair from '../assets/chair.webp'
import lamp from '../assets/lamp.webp'
import shelf from '../assets/shelf.webp'
import setup from '../assets/setup.webp'

const products = [
  {
    name: 'Ergo Chair',
    category: 'Chairs',
    price: 149,
    image: chair,
  },
  {
    name: 'Desk Lamp',
    category: 'Lighting',
    price: 59,
    image: lamp,
  },
  {
    name: 'Oak Desk Shelf',
    category: 'Accessories',
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

function ProductGrid() {
  return (
    <section className="products-section">
      <div className="section-header">
        <p>Featured products</p>
        <h2>Upgrade your workspace essentials.</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid