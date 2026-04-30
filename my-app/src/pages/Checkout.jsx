import { Link } from 'react-router-dom'
import { useState } from 'react'

const shippingOptions = {
  standard: {
    label: 'Standard delivery',
    detail: 'Estimated 7-14 business days after dispatch',
    price: 0,
  },
  express: {
    label: 'Priority delivery',
    detail: 'Estimated 4-8 business days after dispatch',
    price: 29,
  },
}

const phoneCountries = [
  { label: 'United States', flag: '🇺🇸', code: '+1' },
  { label: 'United Kingdom', flag: '🇬🇧', code: '+44' },
  { label: 'Germany', flag: '🇩🇪', code: '+49' },
  { label: 'France', flag: '🇫🇷', code: '+33' },
  { label: 'Canada', flag: '🇨🇦', code: '+1' },
  { label: 'Australia', flag: '🇦🇺', code: '+61' },
  { label: 'Georgia', flag: '🇬🇪', code: '+995' },
  { label: 'United Arab Emirates', flag: '🇦🇪', code: '+971' },
  { label: 'Japan', flag: '🇯🇵', code: '+81' },
]

function PayPalMark() {
  return (
    <svg viewBox="0 0 96 28" aria-hidden="true" className="paypal-mark">
      <rect width="96" height="28" rx="8" fill="#f7fbff" />
      <text x="13" y="19" fill="#003087" fontSize="15" fontWeight="700">
        Pay
      </text>
      <text x="42" y="19" fill="#009cde" fontSize="15" fontWeight="700">
        Pal
      </text>
    </svg>
  )
}

function CardMark() {
  return (
    <svg viewBox="0 0 42 28" aria-hidden="true" className="card-mark">
      <rect width="42" height="28" rx="7" fill="#1f1f1f" />
      <rect x="7" y="8" width="28" height="4" rx="2" fill="#f4c76b" />
      <rect x="7" y="18" width="12" height="3" rx="1.5" fill="#fff" opacity="0.9" />
    </svg>
  )
}

function BankMark() {
  return (
    <svg viewBox="0 0 42 28" aria-hidden="true" className="bank-mark">
      <rect width="42" height="28" rx="7" fill="#efe8df" />
      <path d="M21 6 9 13h24L21 6Z" fill="#1f1f1f" />
      <path d="M12 14h4v8h-4zm7 0h4v8h-4zm7 0h4v8h-4z" fill="#1f1f1f" />
    </svg>
  )
}

function Checkout({ cartItems, onClearCart }) {
  const [confirmed, setConfirmed] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [shippingMethod, setShippingMethod] = useState('standard')
  const [sameBilling, setSameBilling] = useState(true)
  const [phoneCountry, setPhoneCountry] = useState(phoneCountries[0].label)
  const [phoneNumber, setPhoneNumber] = useState(`${phoneCountries[0].code} `)

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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = shippingOptions[shippingMethod].price
  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + shipping + tax

  function handleSubmit(event) {
    event.preventDefault()
    setConfirmed(true)
    onClearCart()
  }

  function handlePhoneCountryChange(event) {
    const nextCountry = phoneCountries.find(
      (country) => country.label === event.target.value
    )

    setPhoneCountry(event.target.value)
    setPhoneNumber(`${nextCountry.code} `)
  }

  if (confirmed) {
    return (
      <main className="checkout-page">
        <section className="checkout-confirmation">
          <p className="about-label">Order received</p>
          <h1>Your DeskHaus setup request is confirmed.</h1>
          <p>
            This front-end checkout completes the store flow without processing
            a real payment.
          </p>
          <Link to="/products" className="primary-button">Continue shopping</Link>
        </section>
      </main>
    )
  }

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <section className="checkout-confirmation">
          <p className="about-label">Checkout</p>
          <h1>Your cart is empty.</h1>
          <Link to="/products" className="primary-button">Browse products</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <section className="checkout-header">
        <div>
          <p className="about-label">Secure checkout</p>
          <h1>Complete your workspace order.</h1>
          <p>
            Confirm delivery, choose a payment method, and review your DeskHaus
            setup before placing the order.
          </p>
        </div>

        <div className="checkout-trust">
          <span>Protected checkout</span>
          <strong>SSL</strong>
        </div>
      </section>

      <section className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <section className="checkout-panel">
            <div className="checkout-panel-header">
              <span>01</span>
              <div>
                <h2>Contact details</h2>
                <p>Where should we send the order confirmation?</p>
              </div>
            </div>

            <div className="checkout-fields two-columns">
              <label>
                First name
                <input type="text" placeholder="Alex" required />
              </label>
              <label>
                Last name
                <input type="text" placeholder="Morgan" required />
              </label>
            </div>

            <div className="checkout-fields two-columns">
              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Phone
                <div className="phone-field">
                  <select
                    aria-label="Country calling code"
                    value={phoneCountry}
                    onChange={handlePhoneCountryChange}
                  >
                    {phoneCountries.map((country) => (
                      <option value={country.label} key={`${country.label}-${country.code}`}>
                        {country.flag} {country.label} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="+1 555 013 4488"
                    required
                  />
                </div>
              </label>
            </div>
          </section>

          <section className="checkout-panel">
            <div className="checkout-panel-header">
              <span>02</span>
              <div>
                <h2>Delivery</h2>
                <p>Choose where and how the setup should arrive.</p>
              </div>
            </div>

            <label>
              Street address
              <input type="text" placeholder="24 Maple Street, Apt 4B" required />
            </label>

            <div className="checkout-fields three-columns">
              <label>
                City
                <input type="text" placeholder="London" required />
              </label>
              <label>
                Postal code
                <input type="text" placeholder="SW1A 1AA" required />
              </label>
              <label>
                Country
                <input type="text" placeholder="United Kingdom" required />
              </label>
            </div>

            <div className="shipping-options" aria-label="Shipping method">
              {Object.entries(shippingOptions).map(([key, option]) => (
                <label
                  className={shippingMethod === key ? 'shipping-option active' : 'shipping-option'}
                  key={key}
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    value={key}
                    checked={shippingMethod === key}
                    onChange={() => setShippingMethod(key)}
                  />
                  <span>
                    <strong>{option.label}</strong>
                    <small>{option.detail}</small>
                  </span>
                  <b>{option.price === 0 ? 'Free' : `$${option.price}`}</b>
                </label>
              ))}
            </div>
          </section>

          <section className="checkout-panel">
            <div className="checkout-panel-header">
              <span>03</span>
              <div>
                <h2>Payment</h2>
                <p>Select the payment style this order will use.</p>
              </div>
            </div>

            <div className="payment-methods" aria-label="Payment method">
              <label className={paymentMethod === 'card' ? 'payment-card active' : 'payment-card'}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <CardMark />
                <span>
                  <strong>Credit or debit card</strong>
                  <small>Visa, Mastercard, Amex</small>
                </span>
              </label>

              <label className={paymentMethod === 'paypal' ? 'payment-card active' : 'payment-card'}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <PayPalMark />
                <span>
                  <strong>PayPal</strong>
                  <small>Pay using a PayPal account</small>
                </span>
              </label>

              <label className={paymentMethod === 'bank' ? 'payment-card active' : 'payment-card'}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                />
                <BankMark />
                <span>
                  <strong>Bank transfer</strong>
                  <small>Manual invoice payment</small>
                </span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="payment-details">
                <label>
                  Name on card
                  <input type="text" placeholder="Alex Morgan" required />
                </label>

                <label>
                  Card number
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    maxLength="19"
                    required
                  />
                </label>

                <div className="checkout-fields three-columns">
                  <label>
                    Expiry month
                    <input type="text" inputMode="numeric" placeholder="MM" maxLength="2" required />
                  </label>
                  <label>
                    Expiry year
                    <input type="text" inputMode="numeric" placeholder="YY" maxLength="2" required />
                  </label>
                  <label>
                    CVC
                    <input type="text" inputMode="numeric" placeholder="123" maxLength="4" required />
                  </label>
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="payment-callout paypal-callout">
                <PayPalMark />
                <div>
                  <strong>Continue with PayPal</strong>
                  <p>You would be redirected to PayPal to approve the payment.</p>
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="payment-details">
                <div className="checkout-fields two-columns">
                  <label>
                    Account holder
                    <input type="text" placeholder="Alex Morgan" required />
                  </label>
                  <label>
                    Bank name
                    <input type="text" placeholder="Global Bank" required />
                  </label>
                </div>
                <label>
                  IBAN
                  <input type="text" placeholder="GB29 NWBK 6016 1331 9268 19" required />
                </label>
              </div>
            )}

            <label className="billing-toggle">
              <input
                type="checkbox"
                checked={sameBilling}
                onChange={(event) => setSameBilling(event.target.checked)}
              />
              Billing address is the same as delivery address
            </label>

            {!sameBilling && (
              <label>
                Billing address
                <input type="text" placeholder="Billing street, city, country" required />
              </label>
            )}
          </section>

          <button className="checkout-button" type="submit">
            Place order - ${total}
          </button>
        </form>

        <aside className="checkout-summary">
          <div className="summary-topline">
            <p className="about-label">Your order</p>
            <h2>Order summary</h2>
          </div>

          <div className="summary-items">
            {groupedItems.map((item) => (
              <div className="summary-product" key={item.name}>
                <div className="summary-product-image">
                  <img src={item.image} alt={item.name} />
                  <span>{item.quantity}</span>
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.category}</p>
                </div>
                <b>${item.price * item.quantity}</b>
              </div>
            ))}
          </div>

          <div className="summary-lines">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>
            <div className="summary-row">
              <span>{shippingOptions[shippingMethod].label}</span>
              <strong>{shipping === 0 ? 'Free' : `$${shipping}`}</strong>
            </div>
            <div className="summary-row">
              <span>Estimated tax</span>
              <strong>${tax}</strong>
            </div>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>

          <div className="summary-note secure-note">
            Payment fields are front-end only for this project. No real payment
            is processed.
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Checkout
