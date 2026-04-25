function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">DeskHaus</div>

      <nav className="nav-links">
        <a href="#">Desks</a>
        <a href="#">Chairs</a>
        <a href="#">Lighting</a>
        <a href="#">Accessories</a>
      </nav>

      <div className="nav-actions">
        <input
          className="search-input"
          type="text"
          placeholder="Search wood, lamps..."
        />

        <button className="cart-button">Cart 0</button>
       <button className="nav-button">Shop</button>
      </div>
    </header>
  )
}

export default Navbar