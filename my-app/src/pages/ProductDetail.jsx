import { Link, useParams } from 'react-router-dom'

import ProductCard from '../components/ProductCard'
import { getProductBySlug, products } from '../data/products'

function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <main className="detail-page">
        <section className="not-found-panel">
          <p className="about-label">Product not found</p>
          <h1>This product is not in the DeskHaus catalog.</h1>
          <Link to="/products" className="primary-button">Back to products</Link>
        </section>
      </main>
    )
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3)

  return (
    <main className="detail-page">
      <section className="product-detail">
        <div className="detail-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <p className="about-label">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>

          <div className="detail-price-row">
            <strong>${product.price}</strong>
            <button
              className="primary-button"
              type="button"
              onClick={() => onAddToCart(product)}
            >
              Add to cart
            </button>
          </div>

          <div className="detail-specs">
            <div>
              <span>Materials</span>
              <p>{product.materials}</p>
            </div>
            <div>
              <span>Dimensions</span>
              <p>{product.dimensions}</p>
            </div>
          </div>

          <ul className="detail-list">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-section">
          <div className="section-header">
            <p>Pairs well with</p>
            <h2>More from {product.category.toLowerCase()}.</h2>
          </div>

          <div className="product-grid related-grid">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.slug}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
                product={item}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default ProductDetail
