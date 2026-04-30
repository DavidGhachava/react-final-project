import ProductCard from './ProductCard'
import { featuredProducts } from '../data/products'

function ProductGrid({ onAddToCart }) {
  return (
    <section className="products-section">
      <div className="section-header">
        <p>Featured products</p>
        <h2>Upgrade your workspace essentials.</h2>
      </div>

      <div className="product-grid">
        {featuredProducts.map((product) => (
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
    </section>
  )
}

export default ProductGrid
