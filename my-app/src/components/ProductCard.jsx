function ProductCard({ product, image, name, category, price, onAddToCart }) {
  return (
    <article className="product-card">
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

      <button className="add-cart-button" onClick={() => onAddToCart(product)}>
        Add to cart
      </button>
    </article>
  )
}

export default ProductCard