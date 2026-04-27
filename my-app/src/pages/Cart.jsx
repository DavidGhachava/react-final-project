function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="cart-page">
      <section className="cart-header">
        <p className="about-label">Your cart</p>
        <h1>Review your workspace picks.</h1>
      </section>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <p>Add products from the shop to see them here.</p>
        </div>
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <article className="cart-item" key={`${item.name}-${index}`}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <p>{item.category}</p>
                  <h3>{item.name}</h3>
                  <span>Premium DeskHaus selection</span>
                </div>

                <strong>${item.price}</strong>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <strong>{cartItems.length}</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${total}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <strong>Free</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${total}</strong>
            </div>

            <button className="checkout-button">Checkout</button>
          </aside>
        </section>
      )}
    </main>
  )
}

export default Cart