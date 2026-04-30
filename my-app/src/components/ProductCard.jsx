import { Link } from 'react-router-dom'

function ProductCard({ product, image, name, category, price, onAddToCart }) {
  const primarySpec = product.specs?.[0]
  const secondarySpec = product.specs?.[1]

  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card-link">
        <div className="product-image-wrap">
          <img src={image} alt={name} className="product-image" />
          <span className="product-card-badge">{category}</span>
        </div>

        <div className="product-info">
          <div>
            <p className="product-category">{product.finish}</p>
            <h3>{name}</h3>
          </div>

          <strong>${price}</strong>
        </div>

        <div className="product-meta-row">
          {primarySpec && <span>{primarySpec.label}: {primarySpec.value}</span>}
          {secondarySpec && <span>{secondarySpec.label}: {secondarySpec.value}</span>}
        </div>
      </Link>

      <div className="product-card-actions">
        <Link to={`/products/${product.slug}`} className="details-link">
          View details
        </Link>
        <button className="add-cart-button" onClick={() => onAddToCart(product)}>
          Quick add
        </button>
      </div>
    </article>
  )
}

export default ProductCard
