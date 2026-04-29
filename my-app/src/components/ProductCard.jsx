import { Link } from 'react-router-dom'

function ProductCard({ product, image, name, category, price, onAddToCart }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card-link">
        <div className="product-image-wrap">
          <img src={image} alt={name} className="product-image" />
        </div>

        <div className="product-info">
          <div>
            <p className="product-category">{category}</p>
            <h3>{name}</h3>
          </div>

          <strong>${price}</strong>
        </div>
      </Link>

      <div className="product-card-actions">
        <Link to={`/products/${product.slug}`} className="details-link">
          Details
        </Link>
        <button className="add-cart-button" onClick={() => onAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
