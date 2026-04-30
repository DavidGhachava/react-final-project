import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ProductCard from '../components/ProductCard'
import { getProductBySlug, products } from '../data/products'

function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

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

  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const pairedProducts = (product.pairsWith || [])
    .map((relatedSlug) => getProductBySlug(relatedSlug))
    .filter(Boolean)
  const relatedProducts =
    pairedProducts.length > 0
      ? pairedProducts.slice(0, 3)
      : products.filter((item) => item.slug !== product.slug).slice(0, 3)

  const totalPrice = product.price * quantity

  function handleQuantityChange(nextQuantity) {
    setQuantity(Math.min(9, Math.max(1, nextQuantity)))
  }

  return (
    <main className="detail-page">
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/products">Products</Link>
        <span>/</span>
        <Link to={`/products?category=${product.category}`}>{product.category}</Link>
        <span>/</span>
        <strong>{product.name}</strong>
      </nav>

      <section className="product-detail">
        <div className="detail-gallery" aria-label={`${product.name} product images`}>
          <div className="detail-image-wrap">
            <img src={gallery[activeImageIndex]} alt={product.name} />
          </div>

          <div className="detail-thumbnails">
            {gallery.map((image, index) => (
              <button
                key={`${product.slug}-image-${index}`}
                className={
                  activeImageIndex === index
                    ? 'detail-thumbnail active'
                    : 'detail-thumbnail'
                }
                type="button"
                aria-label={`Show ${product.name} image ${index + 1}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-title-row">
            <div>
              <p className="about-label">{product.category}</p>
              <h1>{product.name}</h1>
            </div>
            <strong>${product.price}</strong>
          </div>

          <p className="detail-description">{product.description}</p>
          <p className="detail-long-description">{product.longDescription}</p>

          <div className="detail-purchase-panel">
            <div className="quantity-control" aria-label="Choose quantity">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              className="primary-button detail-add-button"
              type="button"
              onClick={() => onAddToCart(product, quantity)}
            >
              Add ${totalPrice}
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
            <div>
              <span>Finish</span>
              <p>{product.finish}</p>
            </div>
            <div>
              <span>Lead time</span>
              <p>{product.leadTime}</p>
            </div>
          </div>

          <section className="detail-panel">
            <h2>Why it works</h2>
            <ul className="detail-list">
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="detail-info-grid" aria-label="Product information">
        <article>
          <span>Product specs</span>
          <dl>
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article>
          <span>Shipping</span>
          <h2>Protected packaging, clear delivery estimates.</h2>
          <p>
            DeskHaus pieces dispatch after preparation and ship with protective
            packaging. Exact delivery estimates are reviewed before checkout.
          </p>
        </article>

        <article>
          <span>Care</span>
          <h2>Made for daily use.</h2>
          <p>{product.care}</p>
        </article>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-section">
          <div className="section-header">
            <p>Pairs well with</p>
            <h2>Finish the setup around it.</h2>
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
