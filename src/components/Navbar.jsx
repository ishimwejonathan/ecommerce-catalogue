import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <header className="navbar">

      {/* LEFT SIDE */}
      <div className="nav-left">
        <Link to="/" className="logo">
          Iguriro
        </Link>

        <nav className="nav-links">
          <Link to="/">Shop</Link>
          <Link to="/">Categories</Link>
          <Link to="/">Deals</Link>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <input
          type="text"
          className="search"
          placeholder="Search products"
        />

        {/* PROFILE */}
        <Link to="/profile" className="profile">
          👤
        </Link>

        {/* CART */}
        <Link to="/cart" className="cart">
          🛒
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>

    </header>
  );
};

export default Navbar;