import { Link } from 'react-router-dom'

function Cart({
  cartItems,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct,
  onClearCart,
}) {
  const groupedItems = Object.values(
    cartItems.reduce((groups, item) => {
      if (!groups[item.name]) {
        groups[item.name] = {
          ...item,
          quantity: 0,
        }
      }

      groups[item.name].quantity += 1
      return groups
    }, {})
  )

  const totalItems = cartItems.length
  const subtotal = groupedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const setupCount = groupedItems.length

  return (
    <main className="cart-page">
      <section className="cart-header">
        <p className="about-label">Your cart</p>
        <div className="cart-heading-row">
          <div>
            <h1>Review your workspace picks.</h1>
            <p className="cart-subtext">
              A cleaner overview of your setup, with grouped quantities and quick
              adjustments before checkout.
            </p>
          </div>

          {totalItems > 0 && (
            <button className="cart-clear-button" onClick={onClearCart}>
              Clear cart
            </button>
          )}
        </div>
      </section>

      {totalItems === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-badge">0 items selected</span>
          <h2>Your cart is empty.</h2>
          <p>
            Add a desk, lamp, or ergonomic upgrade to start building your ideal
            workspace.
          </p>
          <Link to="/products" className="empty-cart-link">
            Browse products
          </Link>
        </div>
      ) : (
        <section className="cart-layout">
          <div className="cart-items-panel">
            <div className="cart-panel-header">
              <div>
                <p className="cart-panel-label">Selected pieces</p>
                <h2>{setupCount} product lines in your setup</h2>
              </div>
              <span className="cart-panel-count">{totalItems} total items</span>
            </div>

            <div className="cart-items">
              {groupedItems.map((item) => {
                const lineTotal = item.price * item.quantity

                return (
                  <article className="cart-item" key={item.name}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <p>{item.category}</p>
                      <h3>{item.name}</h3>
                      <span>
                        {item.quantity} x {item.name.toLowerCase()}
                        {item.quantity > 1 ? 's' : ''} in your setup
                      </span>

                      <div className="cart-item-actions">
                        <div className="quantity-control" aria-label={`${item.name} quantity controls`}>
                          <button
                            type="button"
                            onClick={() => onDecreaseQuantity(item.name)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            -
                          </button>
                          <strong>{item.quantity}</strong>
                          <button
                            type="button"
                            onClick={() => onIncreaseQuantity(item.name)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-button"
                          onClick={() => onRemoveProduct(item.name)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart-line-price">
                      <span>${item.price} each</span>
                      <strong>${lineTotal}</strong>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <aside className="cart-summary">
            <p className="cart-panel-label">Order summary</p>
            <h2>Your setup total</h2>

            <div className="summary-row">
              <span>Items</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="summary-row">
              <span>Unique products</span>
              <strong>{setupCount}</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <strong>Calculated at checkout</strong>
            </div>

            <div className="summary-note">
              Premium workspace pieces ship with protected packaging and curated
              setup-ready presentation.
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${subtotal}</strong>
            </div>

            <Link to="/checkout" className="checkout-button">Checkout</Link>

            <Link to="/products" className="summary-link">
              Continue shopping
            </Link>
          </aside>
        </section>
      )}
    </main>
  )
}

export default Cart
