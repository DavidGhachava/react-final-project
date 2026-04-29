import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div>
          <p className="about-label">Contact</p>
          <h1>Need help building your workspace?</h1>
          <p>
            Ask about product pairings, delivery, returns, or choosing the right
            setup for your room.
          </p>
        </div>

        <div className="contact-card">
          <span>Email</span>
          <strong>hello@deskhaus.example</strong>
          <span>Support hours</span>
          <strong>Monday to Friday, 9:00-18:00</strong>
        </div>
      </section>

      <section className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" required />
          </label>
          <label>
            Email
            <input type="email" required />
          </label>
          <label>
            Message
            <textarea rows="6" required />
          </label>
          <button className="primary-button" type="submit">
            Send message
          </button>
          {submitted && <p className="form-note">Thanks. Your message is ready for the DeskHaus team.</p>}
        </form>

        <div className="contact-info-panel">
          <h2>What we can help with</h2>
          <p>Choosing desk sizes, pairing chairs and shelves, delivery timing, and product care.</p>
          <p>For orders, include the product name and the email used at checkout.</p>
        </div>
      </section>
    </main>
  )
}

export default Contact
