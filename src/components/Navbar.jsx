const Navbar = ({ cartCount }) => {

  return (
    <header className="navbar">

      <div className="logo">Iguriro</div>

      <nav className="nav-links">
        <a>Shop</a>
        <a>Categories</a>
        <a>Deals</a>
      </nav>

      <input
        className="search"
        placeholder="Search products"
      />

      <div className="cart">
        🛒
        <span className="cart-badge">{cartCount}</span>
      </div>

    </header>
  )
}

export default Navbar